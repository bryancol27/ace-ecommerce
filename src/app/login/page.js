'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { MainStyled } from './styles';

//import icons
import { Mail, Lock } from 'feather-icons-react/build/IconComponents';
import { useRef } from 'react';
import { login_request } from '@/services/user/login.service';
import { save_local_storage } from '@/utils/localStorage';

export default function LogIn() {
    // Hookks
    const referenceForm = useRef(null);
    const router = useRouter();

    // Handler login
    const handlerLogIn = async () => {
        const formData = new FormData(referenceForm.current);

        const object_login_request = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        const response = await login_request(object_login_request);

        if (!response) {
            toast.error('Existe un error en la información ingresada', {
                position: 'top-right',
            });
        } else {
            toast.success('Ingreso aprobado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });

            save_local_storage('user_object', response);

            setTimeout(() => {
                if (response.type == 'user') {
                    router.push('/');
                } else {
                    router.push('business-management');
                }
            }, 2200);
        }
    };

    return (
        <MainStyled>
            <h1>Ingresa</h1>

            <form className="formBox" ref={referenceForm}>
                <div>
                    <label htmlFor="email">
                        <Mail />
                        Email
                    </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">
                        <Lock />
                        Contraseña
                    </label>
                    <input type="password" name="password" />
                </div>
            </form>
            <button type="button" onClick={handlerLogIn}>
                Ingresar
            </button>

            <ToastContainer />
        </MainStyled>
    );
}
