'use client';

import Image from 'next/image';
// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock } from 'feather-icons-react/build/IconComponents';

export default function Register() {
    return (
        <MainStyled>
            <h1>Ingresa</h1>

            <form>
                <div>
                    <label for="">
                        <Mail />
                        Email
                    </label>
                    <input type="email" />
                </div>
                <div>
                    <label for="">
                        <Lock />
                        Contraseña
                    </label>
                    <input type="password" />
                </div>
            </form>
            <button type="button">Ingresar</button>
        </MainStyled>
    );
}
