'use client';

const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Import ant design components
import { Table, Modal, Button, Typography, Upload, Input, message } from 'antd';
import { LoadingOutlined, PlusOutlined, ShopFilled } from '@ant-design/icons';

// Import styles
import { MainBussinesProducts } from './styles';

// Import ant dependencies
import { columns_table } from './utils/tableStructure';

// Import functions
import { get_local_storage } from '@/utils/localStorage';

// Import services
import { user_has_organization } from '@/services/organizations/user_has_organization';
import { get_related_products } from '@/services/products/get_products';
import { post_image_products } from '@/services/products/post_product_img';
import { post_products } from '@/services/products/post_product_object';

// Import utils
import { getBase64, beforeUpload } from '@/utils/inputImg';
import { delete_products } from '@/services/products/delete_product';

export default function ProductsInventory() {
    // *REF
    const ref_create_product = useRef();

    // * STATES
    // Products S
    const [products, setProducts] = useState([]);

    // Organization S
    const [organization, setOrganization] = useState({});
    const [productTargetId, setProductTargetId] = useState(0);

    // Modal props S
    const [open, setOpen] = useState(false);

    // Form sync up
    const [name, setName] = useState('');
    const [productsType, setProductsType] = useState('');
    const [inventory, setInventory] = useState('');

    // Upload images S
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(false);
    const [fileImage, setFileImage] = useState(false);

    // UI S
    const [update, setUpdate] = useState(false);

    // Handlers
    const handleChange = (info) => {
        setFileImage(info.file);

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const handleDelete = async (product_id) => {
        const res = await delete_products(product_id);

        if (res.acknowledged) {
            setTimeout(() => {
                get_again_products();
                message.success('Producto eliminado', 3);
            }, 1500);
        } else {
            message.error('Error en la eliminación del producto', 3);
        }
    };

    const handleSubmitForm = async () => {
        const formDataGetter = new FormData(ref_create_product.current);

        const object_to_send = {
            id_business: organization._id,
            name: formDataGetter.get('name'),
            price: formDataGetter.get('products_type'),
            inventory: formDataGetter.get('inventory'),
        };

        let id_inserted = null;

        if (
            imageUrl &&
            fileImage &&
            formDataGetter.get('name') &&
            formDataGetter.get('products_type') &&
            formDataGetter.get('inventory')
        ) {
            const formData = new FormData();
            formData.append('image', fileImage.originFileObj);

            const _id_product = await post_image_products(
                formData,
                productTargetId,
            );

            const result = await post_products(object_to_send, _id_product);
            id_inserted = result.id_inserted;
        } else {
            const result = await post_products(object_to_send, productTargetId);
            id_inserted = result.id_inserted;
        }

        if (id_inserted) {
            message.success('Producto añadido', 3);
            setUpdate(!update);
            setOpen(false);

            reset_form();
        } else {
            message.error('Hay un error en los campos, verifica.', 3);
        }
    };

    const reset_form = () => {
        setLoading(false);
        setImageUrl(false);
        setFileImage(false);
        setProductTargetId(0);

        setName('');
        setProductsType('');
        setInventory('');
    };

    const fill_form = async ({ price, name, inventory, _id }) => {
        setImageUrl(`${url_api}/products/get-product-image/${_id}`);

        setProductTargetId(_id);

        setName(name);
        setProductsType(price);
        setInventory(inventory);
    };

    const get_again_products = async () => {
        if (organization._id) {
            get_related_products(organization._id).then(({ products }) => {
                if (products.length) {
                    setProducts(
                        products.map((product) => ({
                            key: product._id,
                            name: product.name,
                            price: product.price,
                            inventory: product.inventory,
                            product_edit: () => {
                                fill_form(product);
                                setOpen(true);
                            },
                            product_delete: async () => {
                                await handleDelete(product._id);
                            },
                        })),
                    );
                } else {
                    setProducts([]);
                }
            });
        }
    };

    // Search first time app
    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const user_loca_storage = get_local_storage('user_object');

            if (user_loca_storage) {
                user_has_organization(user_loca_storage._id).then((value) => {
                    if (value._id) {
                        setOrganization(value);

                        get_related_products(value._id).then(({ products }) => {
                            if (products.length) {
                                setProducts(
                                    products.map((product) => ({
                                        key: product._id,
                                        name: product.name,
                                        price: product.price,
                                        inventory: product.inventory,
                                        product_edit: () => {
                                            fill_form(product);
                                            setOpen(true);
                                        },
                                        product_delete: async () => {
                                            await handleDelete(product._id);
                                        },
                                    })),
                                );
                            }
                        });
                    }
                });
            }
        }
    }, [update]);

    return (
        <MainBussinesProducts>
            <div className="container">
                <div className="top_table">
                    <h2 className="title_organization">
                        Administrador de productos
                    </h2>

                    <Button
                        type="primary"
                        icon={<ShopFilled />}
                        style={{
                            backgroundColor: '#BA181B',
                        }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        Agregar productos
                    </Button>
                </div>

                <Table
                    columns={columns_table}
                    dataSource={products}
                    style={{ width: '100%' }}
                />
            </div>

            <Modal
                className="modal_create_product"
                title="Describe tu producto"
                open={open}
                onOk={handleSubmitForm}
                onCancel={() => {
                    setOpen(false);
                    reset_form();
                }}
            >
                <form
                    className="form_product"
                    ref={ref_create_product}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            marginBottom: '25px',
                        }}
                    >
                        <Upload
                            name="avatar"
                            id="avatar_input"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            style="display: flex;justify-content: center;"
                        >
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                    width={100}
                                    height={100}
                                    onError={() => setImageUrl(false)}
                                />
                            ) : (
                                <button
                                    style={{
                                        border: 0,
                                        background: 'none',
                                    }}
                                    type="button"
                                >
                                    {loading ? (
                                        <LoadingOutlined />
                                    ) : (
                                        <PlusOutlined />
                                    )}
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </button>
                            )}
                        </Upload>
                    </div>

                    <div style={{ marginBottom: '15px', width: '100%' }}>
                        <Typography.Paragraph style={{ marginBottom: '5px' }}>
                            Nombre del producto
                        </Typography.Paragraph>
                        <Input
                            placeholder="Ejem: Caja de zapatos"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: '15px', width: '100%' }}>
                        <Typography.Paragraph style={{ marginBottom: '5px' }}>
                            Precio del articulo
                        </Typography.Paragraph>
                        <Input
                            placeholder="Ejem: Eje: 25000"
                            name="products_type"
                            id="products_type"
                            type="number"
                            value={productsType}
                            onChange={(e) => setProductsType(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: '15px', width: '100%' }}>
                        <Typography.Paragraph style={{ marginBottom: '5px' }}>
                            Inventario
                        </Typography.Paragraph>
                        <Input
                            placeholder="Ejem: 100"
                            name="inventory"
                            id="inventory"
                            type="number"
                            value={inventory}
                            onChange={(e) => setInventory(e.target.value)}
                        />
                    </div>
                </form>

                {/* <p>{modalText}</p> */}
            </Modal>
        </MainBussinesProducts>
    );
}
