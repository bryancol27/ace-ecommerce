'use client';

import React from 'react';

import Image from 'next/image';

// Import styles
import { Nav } from './styles';

// Icons
import { ShoppingCart } from 'feather-icons-react/build/IconComponents';

export const Navbar = () => {
    return (
        <Nav>
            <figure>
                <Image
                    src="/logos/Title.svg"
                    alt="titulo ace"
                    width={240}
                    height={35}
                />
            </figure>

            <ul>
                <li>
                    <ShoppingCart color={'white'} />
                </li>
                <li>
                    <button>Log in</button>
                </li>
                <li>
                    <button>Register</button>
                </li>
            </ul>
        </Nav>
    );
};
