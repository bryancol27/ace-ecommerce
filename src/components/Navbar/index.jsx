'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

// Import styles
import { Nav, Loader_container } from './styles';

// Icons
import {
    ShoppingCart,
    Menu,
    User,
} from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';

// Import utils
import {
    HasPermissionsRoute,
    response_function,
} from '@/utils/HasPermissionsRoute';
import { get_local_storage, remove_local_storage } from '@/utils/localStorage';

// Ant
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
// * Ant design components
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

// Data
const items = [
    {
        key: '1',
        label: (
            <a rel="noopener noreferrer" href="/business-management">
                Ver mi organización
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
                onClick={() => remove_local_storage('')}
            >
                Ver mis compras
            </Link>
        ),
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        danger: true,
        label: (
            <Link
                rel="noopener noreferrer"
                href="/"
                onClick={() => {
                    remove_local_storage('user_object');
                    location.reload();
                }}
            >
                Salir de la aplicación
            </Link>
        ),
    },
];

export const Navbar = ({ children }) => {
    // Hooks instance
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [hasSession, setHasSession] = useState(null);

    useEffect(() => {
        console.log('ENTRE AQUI');

        if (typeof localStorage !== 'undefined') {
            const user_loca_storage = get_local_storage('user_object');

            if (user_loca_storage) {
                setHasSession(true);
            } else {
                setHasSession(false);
            }
        }
    }, [pathName, searchParams]);

    if (typeof localStorage !== 'undefined') {
        const user_loca_storage = get_local_storage('user_object');
        const has_permissions = HasPermissionsRoute(
            pathName,
            user_loca_storage,
        );

        if (has_permissions == response_function.not_permissions) {
            setTimeout(() => {
                router.push(`/login?${response_function.not_permissions}`);
            }, 500);

            return (
                <Loader_container>
                    <Spin
                        indicator={
                            <LoadingOutlined style={{ fontSize: 50 }} spin />
                        }
                    />
                </Loader_container>
            );
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
                    {hasSession != null && !hasSession && (
                        <>
                            <li>
                                <Link className="button_redirect" href="/login">
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="button_redirect"
                                    href="/register"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                    {hasSession && (
                        <li>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                            >
                                <a
                                    onClick={(e) => e.preventDefault()}
                                    className="anchor_user_settings"
                                >
                                    <User />
                                    <DownOutlined size={10} />
                                </a>
                            </Dropdown>
                        </li>
                    )}
                </ul>

                <button className="buttonToggleMenu">
                    <Menu color="white" size={50} />
                </button>
            </Nav>

            {children}
        </>
    );
};
