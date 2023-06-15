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
            <h1>Last Sales</h1>
            <div className="contentItems">
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
                <ItemShoppingCart />
            </div>
        </MainStyled>
    );
}
