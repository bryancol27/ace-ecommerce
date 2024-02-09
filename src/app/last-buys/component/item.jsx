import React from 'react';

import Image from 'next/image';

//import styles
import { ItemContent } from './styles';

const ItemShoppingCart = ({ order }) => {
    const get_total_units = (order, product) => {
        return order.products.find(
            (products_order) => products_order._id == product._id,
        ).quantity;
    };

    return (
        <ItemContent>
            <div className="item">
                <div class="order">
                    <p>Dirección: {order.address}</p>
                    <p>Id de Usuario: {order.id_user}</p>
                    <p>Orden de PayPal: {order.paypal_order}</p>
                    <p>Teléfono: {order.phone}</p>
                    <p>Código Postal: {order.postal_code}</p>
                    <p>Detalles de los Productos:</p>
                </div>

                {order.products_detail.map((product, key) => (
                    <div class="product" key={product._id}>
                        <p>Nombre del Producto: {product.name}</p>
                        <p>Precio: {product.price}</p>
                        <p>Precio: {get_total_units(order, product)}</p>
                    </div>
                ))}
            </div>
        </ItemContent>
    );
};

export { ItemShoppingCart };
