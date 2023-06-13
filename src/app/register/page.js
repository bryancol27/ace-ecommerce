'use client';

import Image from 'next/image';
// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock, Anchor } from 'feather-icons-react/build/IconComponents';

export default function Register() {
    return (
        <MainStyled>
            <h1>Register</h1>

            <form>
                <div>
                    <label for="">
                        <Mail />
                        Register
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
                <div>
                    <label for="">
                        <Lock />
                        Repetir contraseña
                    </label>
                    <input type="password" />
                </div>
                <div>
                    <label for="">
                        <Anchor />
                        Nombre
                    </label>
                    <input type="text" />
                </div>
            </form>
            <button type="button">Registrate</button>
        </MainStyled>
    );
}
