'use client';

const url_paypal = process.env.NEXT_PUBLIC_CLIENT_ID;

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { ItemShoppingCart } from './component/item';

// Import services
import { create_buy_order } from '@/services/order/push_order';

// Import local storage
import {
    save_local_storage,
    get_local_storage,
    remove_local_storage,
} from '@/utils/localStorage';
import { get_products_from_array } from '@/services/products/get_products_by_array';

// Import ant componets
import { message } from 'antd';

export default function Register() {
    const router = useRouter();

    // Ui state
    const [paymentStep, setPaymentStep] = useState(false);
    const [approved, setApproved] = useState(false);

    const [shopping, setShopping] = useState([]);

    const referenceForm = useRef(null);

    useEffect(() => {
        const saved = get_local_storage('shopping_card');

        if (saved.objects) {
            get_products_from_array(saved.objects).then((data) => {
                if (data.results) {
                    setShopping(
                        data.results.map((result) => ({
                            ...result,
                            quantity: 1,
                        })),
                    );
                }
            });
        }
    }, []);

    const getTotalBuy = (usd) => {
        const total_value_cop = shopping.reduce(
            (acc, cur) => (acc += Number(cur.price) * cur.quantity),
            0,
        );

        if (usd) {
            return total_value_cop / 4000;
        }

        return total_value_cop;
    };

    const toggleQuantity = (_id, increment = false) => {
        const target_product = shopping.find((product) => product._id == _id);
        const index_product = shopping.findIndex(
            (product) => product._id == _id,
        );

        const copy_object = [...shopping];

        if (!increment) {
            if (target_product.quantity == 1) {
                const newShopping = shopping.filter(
                    (product) => product._id != _id,
                );

                save_local_storage('shopping_card', {
                    objects: newShopping.map((product) => product._id),
                });
                setShopping(newShopping);
            } else {
                const new_object = {
                    ...target_product,
                    quantity: target_product.quantity - 1,
                };

                copy_object[index_product] = new_object;
            }
        } else {
            const new_object = {
                ...target_product,
                quantity: target_product.quantity + 1,
            };

            copy_object[index_product] = new_object;
        }

        setShopping(copy_object);
    };

    const handleSendBuy = () => {
        const formData = new FormData(referenceForm.current);

        const user_profile_object = get_local_storage('user_object');

        if (
            formData.get('address') &&
            formData.get('phone') &&
            formData.get('postal_code')
        ) {
            const object_login_request = {
                address: formData.get('address'),
                phone: formData.get('phone'),
                postal_code: formData.get('postal_code'),

                products: shopping.map((product) => ({
                    _id: product._id,
                    quantity: product.quantity,
                    id_business: product.id_business,
                })),
                paypal_order: approved,
                id_user: user_profile_object._id,
            };

            create_buy_order(object_login_request).then((data) => {
                if (data) {
                    message.success('Se creo tu orden correctamente', 2);

                    remove_local_storage('shopping_card');
                    router.push('/last-buys');
                } else {
                    message.error(
                        'Error interno del servidor, espera unos segundos',
                        2,
                    );
                }
            });
        } else {
            message.error('Completa todos los campos', 3);
        }
    };

    return (
        <MainStyled>
            {!paymentStep ? (
                <>
                    {shopping.length >= 1 ? (
                        <>
                            <h1>Carrito de compras</h1>
                            <div className="contentItems">
                                {shopping.map((item, key) => (
                                    <ItemShoppingCart
                                        {...item}
                                        key={key}
                                        fnToggle={toggleQuantity}
                                    />
                                ))}

                                <div className="total">
                                    <h5>Total:</h5>
                                    <p>${getTotalBuy()} COP</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPaymentStep(true)}
                            >
                                Pagar
                            </button>
                        </>
                    ) : (
                        <h1>No has añadido nada al carrito de compras</h1>
                    )}
                </>
            ) : approved ? (
                <>
                    <h1
                        style={{
                            fontSize: '20px',
                            textAlign: 'start',
                        }}
                    >
                        Llena los siguientes datos para la entrega de tus
                        productos
                    </h1>

                    <form className="formBox" ref={referenceForm}>
                        <div>
                            <label htmlFor="address">dirección</label>
                            <input type="address" name="address" />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefono</label>
                            <input type="phone" name="phone" />
                        </div>
                        <div>
                            <label htmlFor="postal_code">Codigo postal</label>
                            <input type="postal_code" name="postal_code" />
                        </div>
                    </form>

                    <button type="button" onClick={() => handleSendBuy(true)}>
                        Enviar
                    </button>
                </>
            ) : (
                <>
                    <h1
                        style={{
                            maxWidth: '450px',
                            fontSize: '20px',
                            fontStyle: 'italic',
                        }}
                    >
                        Paga con Paypal tu compra, siempre protegido
                    </h1>

                    <PayPalScriptProvider options={{ clientId: url_paypal }}>
                        <div className="" style={{ width: '400px' }}>
                            <PayPalButtons
                                style={{ layout: 'horizontal' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: 'USD',
                                                    value: getTotalBuy(true),
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(e) => {
                                    setApproved(e.paymentID);
                                }}
                            />
                        </div>
                    </PayPalScriptProvider>
                </>
            )}
        </MainStyled>
    );
}
