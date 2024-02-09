'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify';
import { MainStyled } from './styles';

//import icons
import { Mail, Lock } from 'feather-icons-react/build/IconComponents';
import { useRef } from 'react';
import { login_request } from '@/services/user/login.service';
import { save_local_storage } from '@/utils/localStorage';

import { message } from 'antd';

export default function LogIn() {
    // Hookks
    const referenceForm = useRef(null);
    const router = useRouter();
    const searchParams = useSearchParams();

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

    useEffect(() => {
        const needs_relogin_organization = searchParams.get(
            'needs_relogin_organization',
        );

        if (needs_relogin_organization) {
            message.info('Por favor vuelve a iniciar sesión', 2);
        }
        console.log(needs_relogin_organization);
    }, []);

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
