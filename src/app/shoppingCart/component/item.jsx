import React from 'react';
import Image from 'next/image';
const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

//import styles
import { ItemContent, QuantityButton } from './styles';

const ItemShoppingCart = ({ _id, name, price, quantity, imgUrl, fnToggle }) => {
    return (
        <div style={{ width: '100%' }}>
            <ItemContent>
                <div className="item">
                    <Image
                        src={`${url_api}${imgUrl}`}
                        alt={name}
                        width={39}
                        height={39}
                    />
                    <h3>{name}</h3>
                </div>
                <div className="prices">
                    <p className="numBlack">x{quantity}</p>
                    <p className="numRed">${price} COP</p>
                    <p className="numRed">${Number(price) * quantity} COP</p>
                </div>
            </ItemContent>

            <div style={{ display: 'flex', gap: '15px' }}>
                <QuantityButton onClick={() => fnToggle(_id, false)}>
                    -
                </QuantityButton>

                <QuantityButton onClick={() => fnToggle(_id, true)}>
                    +
                </QuantityButton>
            </div>
        </div>
    );
};

export { ItemShoppingCart };
