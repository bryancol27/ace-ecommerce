'use client';

import React, { useState } from 'react';

import Image from 'next/image';

// Import styles
import { Nav } from './styles';

// Icons
import {
    ShoppingCart,
    Menu,
    X,
} from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';

// Import utils
import {
    HasPermissionsRoute,
    response_function,
} from '@/utils/HasPermissionsRoute';
import { usePathname, useRouter } from 'next/navigation';
import { get_local_storage } from '@/utils/localStorage';

// MUI
import LinearProgress from '@mui/material/LinearProgress';

export const Navbar = ({ children }) => {
    // Hooks instance
    const pathName = usePathname();
    const router = useRouter();

    if (typeof localStorage !== 'undefined') {
        const user_loca_storage = get_local_storage('user_object');
        const has_permissions = HasPermissionsRoute(
            pathName,
            user_loca_storage,
        );

        console.log(has_permissions);
        if (has_permissions == response_function.not_permissions) {
            setTimeout(() => {
                router.push(`/login?${response_function.not_permissions}`);
            }, 1500);

            return <LinearProgress color="success" />;
        }
    }

    return (
        <>
            <Nav>
                <figure>
                    <Image
                        src="/logos/Title.svg"
                        alt="titulo ace"
                        width={240}
                        height={35}
                    />
                </figure>

                <ul className="list">
                    <li>
                        <Link className="no_border" href="/shoppingCart">
                            <ShoppingCart color={'white'} />
                        </Link>
                    </li>
                    <li>
                        <Link className="button_redirect" href="/login">
                            Log in
                        </Link>
                    </li>
                    <li>
                        <Link className="button_redirect" href="/register">
                            Register
                        </Link>
                    </li>
                </ul>

                <button className="buttonToggleMenu">
                    <Menu color="white" size={50} />
                </button>
            </Nav>

            {children}
        </>
    );
};
