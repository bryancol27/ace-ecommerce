'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock } from 'feather-icons-react/build/IconComponents';
import { ItemShoppingCart } from './component/item';

// Import services
import { get_orders_by_user_id } from '@/services/order/get_orders_by_user_id';

// Import local storage
import { get_local_storage } from '@/utils/localStorage';

export default function Register() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (typeof localStorage != 'undefined') {
            const object_user = get_local_storage('user_object');

            get_orders_by_user_id(object_user._id).then((data) => {
                console.log(data);

                setOrders(data.orders);
            });
        }
    }, []);

    console.log(orders);

    return (
        <MainStyled>
            {orders.length >= 1 ? (
                <>
                    <h1>Utimas compras realizadas</h1>
                    <div className="contentItems">
                        {orders.map((order) => (
                            <ItemShoppingCart order={order} key={order._id} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h1>No tienes compras realizas aún</h1>
                </>
            )}
        </MainStyled>
    );
}
