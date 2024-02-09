'use client';

// Styles
import { TitleSearchS } from './styles';

export const TitleSearch = ({ title, placerHolder, fnSearchByInput }) => {
    return (
        <TitleSearchS>
            <h2>{title}</h2>
            <form action="">
                <input
                    type="text"
                    placeholder={placerHolder}
                    onChange={(e) => fnSearchByInput(e.target.value)}
                />
            </form>
        </TitleSearchS>
    );
};
