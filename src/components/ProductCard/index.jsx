'use client';

// Import components
import Image from 'next/image';
import { Card } from './styles';

export const ProductCard = ({ name, price, imgUrl }) => {
    return (
        <Card>
            <figure>
                <Image src={imgUrl} height={215} width={215} alt={name} />
            </figure>

            <h3>{name}</h3>
            <p>${price}</p>

            <button>Comprar</button>
        </Card>
    );
};
