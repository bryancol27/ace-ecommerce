'use client';

import Image from 'next/image';
import { useRef } from 'react';

// import styles from './page.module.css';
import { MainStyled } from './styles';
//import icons
import { Mail, Lock, Anchor } from 'feather-icons-react/build/IconComponents';
import { register_request } from '@/services/user/register.service';

// Import dependencies
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Register() {
    // Hookks
    const referenceForm = useRef(null);
    const router = useRouter();

    const handlerRegister = async () => {
        const formData = new FormData(referenceForm.current);

        if (formData.get('password') !== formData.get('repeat_password')) {
            return toast.error('Las contraseñas son distintas', {
                position: 'top-right',
            });
        }

        const object_register_request = {
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
        };

        const response = await register_request(object_register_request);

        if (!response) {
            toast.error('Existe un error en la información ingresada', {
                position: 'top-right',
            });
        }
        if (typeof response == 'string') {
            toast.error(response, {
                position: 'top-right',
            });
        } else {
            toast.success('Registro aprobado, ingresa.', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });

            setTimeout(() => {
                router.push('/login');
            }, 2200);
        }
    };

    return (
        <MainStyled>
            <h1>Register</h1>

            <form className="formBox" ref={referenceForm}>
                <div>
                    <label for="">
                        <Mail />
                        Email
                    </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label for="">
                        <Lock />
                        Contraseña
                    </label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label for="">
                        <Lock />
                        Repetir contraseña
                    </label>
                    <input type="password" name="repeat_password" />
                </div>
                <div>
                    <label for="">
                        <Anchor />
                        Nombre
                    </label>
                    <input type="text" name="name" />
                </div>
            </form>
            <button type="button" onClick={handlerRegister}>
                Registrate
            </button>

            <ToastContainer />
        </MainStyled>
    );
}
