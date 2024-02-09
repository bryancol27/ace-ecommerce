'use client';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Import services
import { user_has_organization } from '@/services/organizations/user_has_organization';
import { create_organization } from '@/services/organizations/create_organization';

// Import utils
import { get_local_storage, remove_local_storage } from '@/utils/localStorage';

// Import styles
import { MainBussinesMangement, MainBussinessProducts } from './styles';

// Import ant design components
import { Button } from 'antd';
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    InsertRowLeftOutlined,
} from '@ant-design/icons';

// Import components
import { ModalCreateOrganization } from './components/ModalCreateOrganization';

export default function BusinessManagement() {
    const router = useRouter();

    // * States
    // Modal states
    const [showModalCreateOrganization, setShowModalCreateOrganization] =
        useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const referenceModalCreate = useRef(null);

    const [userObject, setUserObject] = useState({});
    const [userHaveOrganization, setUserHaveOrganization] = useState({});

    // Search first time app
    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const user_loca_storage = get_local_storage('user_object');

            if (user_loca_storage) {
                user_has_organization(user_loca_storage._id).then((value) => {
                    setUserHaveOrganization(value);
                });

                setUserObject(user_loca_storage);
            }
        }
    }, []);

    // TODO:INSERT TOAST AT RESULT AND RELOAD THE PAGE IN A GOOD RESULT TO SHOW A DIFFERENT VIEW
    const handleCreateOrganization = async () => {
        // Set the
        setConfirmLoading(true);

        const formData = new FormData(referenceModalCreate.current);

        const object_create_organization = {
            name: formData.get('name'),
            products_type: formData.get('products_type'),
            location: formData.get('location'),
            email: userObject.email,
            owner_patron_id: userObject._id,
        };

        create_organization(object_create_organization)
            .then((response) => {
                setTimeout(() => {
                    setShowModalCreateOrganization(false);
                    setConfirmLoading(false);

                    if (typeof localStorage !== 'undefined') {
                        remove_local_storage('user_object');
                    }
                    HandleChangeRoute('/login?needs_relogin_organization=true');
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const HandleChangeRoute = (route) => {
        router.push(route);
    };

    // TODO: ADD VIEW FOR BUSINESS CREATED AND SPINNER WHEN NOT EXISTS THE DATA YET
    return (
        <>
            {typeof userHaveOrganization.have_organization == 'boolean' &&
            userHaveOrganization.have_organization ? (
                <MainBussinessProducts>
                    <h2 className="title_organization">
                        ¡Bienvenido de nuevo a tu organización!
                    </h2>

                    <article className="cotainer_buttons">
                        <Button
                            type="primary"
                            icon={<ShoppingOutlined />}
                            size="large"
                            style={{
                                width: '300px',
                                backgroundColor: '#4e73df',
                            }}
                            onClick={() =>
                                HandleChangeRoute(
                                    '/business-management/products-inventory',
                                )
                            }
                        >
                            Ver mis productos
                        </Button>

                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            style={{
                                width: '300px',
                                backgroundColor: '#4e73df',
                            }}
                            onClick={() => HandleChangeRoute('/lastSales')}
                        >
                            Ver ordenes de compras
                        </Button>

                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            style={{
                                width: '300px',
                                backgroundColor: '#4e73df',
                                opacity: '0.4',
                            }}
                            onClick={() =>
                                HandleChangeRoute('/business-management')
                            }
                        >
                            Editar tu información (pronto)
                        </Button>
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            style={{
                                width: '300px',
                                backgroundColor: '#4e73df',
                                opacity: '0.4',
                            }}
                            onClick={() =>
                                HandleChangeRoute('/business-management')
                            }
                        >
                            Invitar colaboradores (pronto)
                        </Button>
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            style={{
                                width: '300px',
                                backgroundColor: '#4e73df',
                                opacity: '0.4',
                            }}
                            onClick={() =>
                                HandleChangeRoute('/business-management')
                            }
                        >
                            Asignar estado a ventas (pronto)
                        </Button>
                    </article>
                </MainBussinessProducts>
            ) : (
                <MainBussinesMangement>
                    <figure className="ace_logo">
                        <img
                            src="/logos/Blanca 1.svg"
                            alt="Logo ace ecommerce"
                        />
                    </figure>

                    <h2 className="title_no_organization">
                        ¡Ingresa hoy como vendedor!
                    </h2>

                    <p className="CTA_description">
                        ¿Por qué elegir Ace? Porque no solo vendemos productos,
                        creamos historias. Dale vida a tus creaciones y conecta
                        con clientes apasionados que buscan algo único. Con Ace,
                        tu pequeño negocio se convierte en una experiencia, un
                        destino para los amantes de la calidad y la
                        originalidad.
                    </p>

                    <Button
                        type="primary"
                        onClick={() => setShowModalCreateOrganization(true)}
                    >
                        ¡Crea mi organización!
                    </Button>

                    <ModalCreateOrganization
                        handleCloseModal={setShowModalCreateOrganization}
                        handleCreateOrganization={handleCreateOrganization}
                        haveToBeShowed={showModalCreateOrganization}
                        confirmLoading={confirmLoading}
                        reference_hook={referenceModalCreate}
                    />
                </MainBussinesMangement>
            )}
        </>
    );
}
