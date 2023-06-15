import React from 'react';

import Image from 'next/image';

//import styles
import { ItemContent } from './styles';

const ItemShoppingCart = () => {
    return (
        <ItemContent>
            <div className="item">
                <Image
                    src="https://img.freepik.com/vector-gratis/diseno-etiqueta-platano-aislado_1308-77292.jpg?w=2000"
                    alt="titulo ace"
                    width={39}
                    height={39}
                />
                <h3>Banana</h3>
            </div>
                <p className="date">date: 03/11/2022</p>
        </ItemContent>
    );
};

export { ItemShoppingCart };
