'use client';

import Image from 'next/image';
// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock } from 'feather-icons-react/build/IconComponents';
import { ItemShoppingCart } from './component/item';

export default function Register() {
    return (
        <MainStyled>
            <h1>Carrito de compras</h1>
            <div className="contentItems">
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
                <div className="total">
                    <h5>Total:</h5>
                    <p>125$</p>
                </div>
            </div>
            <button type="button">Pagar</button>
        </MainStyled>
    );
}
