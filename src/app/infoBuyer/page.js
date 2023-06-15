'use client';

import Image from 'next/image';
// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock, Anchor } from 'feather-icons-react/build/IconComponents';

export default function Register() {
    return (
        <MainStyled>
            <h1>Info about your buyer</h1>

            <article className="contentInfo">
                <div className="product">
                    <p className="title">Product list:</p>
                    <div className="content__item">
                        <p className="item__title">ID</p>

                        <span>
                            <p className="item">01</p>
                            <p className="item">01</p>
                            <p className="item">01</p>
                            <p className="item">01</p>
                            <p className="item">01</p>
                        </span>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Nombre</p>
                        <span>
                            <p className="item">Banana</p>
                            <p className="item">Banana</p>
                            <p className="item">Banana</p>
                            <p className="item">Banana</p>
                            <p className="item">Banana</p>
                        </span>
                    </div>
                    <div className="content__item">
                        <p className="item__title">Cantidad</p>
                        <span>
                            <p className="item">x1</p>
                            <p className="item">x1</p>
                            <p className="item">x1</p>
                            <p className="item">x1</p>
                            <p className="item">x1</p>
                        </span>
                    </div>
                </div>

                <div className="content__others">
                    <p className="title">Name person:</p>
                    <p className="item">Bryan Aranzales</p>
                </div>

                <div className="content__others place">
                    <p className="title">City / neighborhood:</p>
                    <p className="item">Bogota / Los rosales</p>
                </div>

                <div className="content__others">
                    <p className="title">Address:</p>
                    <p className="item">Cll 17 20-75SUR</p>
                </div>
            </article>
            <div className="content__select">
                <select name="select">
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
        </MainStyled>
    );
}
