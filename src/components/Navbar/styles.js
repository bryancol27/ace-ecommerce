import styled from '@emotion/styled';

export const Nav = styled.nav`
    width: 100%;
    height: 62px;
    background-color: #161a1d;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        /* width: 100% */
        height: 100%;
        display: flex;
        align-items: center;
        gap: 16px;

        list-style: none;

        li {
            button {
                width: 150px;
                height: 40px;

                border: 1px solid #a4161a;
                border-radius: 25px;

                background-color: transparent;

                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                color: white;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
            }
        }
    }
`;
