import React from 'react';

import Image from 'next/image';

//import styles
import { ItemContent } from './styles';

const ItemShoppingCart = () => {
    return (
        <ItemContent>
            <div className="item">
                <Image
                    src="https://www.movistar.com.co/pages/persons/celulares-gama-alta/celulares/img/iphone/IPHONE-14-PLUS.webp"
                    alt="titulo ace"
                    width={39}
                    height={39}
                />
                <h3>Iphone 14 pro max</h3>
            </div>
            <div className="prices">
                <p className="numBlack">x1</p>
                <p className="numRed">25$</p>
                <p className="numRed">25$</p>
            </div>
        </ItemContent>
    );
};

export { ItemShoppingCart };
