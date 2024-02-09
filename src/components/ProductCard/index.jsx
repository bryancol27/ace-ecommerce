'use client';

const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

// Import components
import Image from 'next/image';
import { Card } from './styles';

export const ProductCard = ({
    _id,
    name,
    price,
    imgUrl,
    storage_selected,
    fnToggleState,
}) => {
    return (
        <Card>
            <figure>
                <Image
                    src={`${url_api}${imgUrl}`}
                    height={215}
                    width={215}
                    alt={name}
                />
            </figure>

            <h3>{name}</h3>
            <p>${price} COP</p>

            <button
                type="button"
                onClick={() => fnToggleState(_id)}
                className={`${storage_selected.includes(_id) ? 'active' : ''}`}
            >
                {storage_selected.includes(_id)
                    ? 'En el carrito'
                    : 'Añadir al carrito'}
            </button>
        </Card>
    );
};
