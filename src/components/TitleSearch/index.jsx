'use client';

// Styles
import { TitleSearchS } from './styles';

export const TitleSearch = ({ title, placerHolder }) => {
    return (
        <TitleSearchS>
            <h2>{title}</h2>
            <form action="">
                <input type="text" placeholder={placerHolder} />
            </form>

            <button>Buscar</button>
        </TitleSearchS>
    );
};
