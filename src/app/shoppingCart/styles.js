import styled from '@emotion/styled';

export const MainStyled = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    h1 {
        font-weight: 500;
        font-size: 35px;
        line-height: 51px;
        text-align: center;
        color: #000000;
    }

    @media (max-width: 450px) {
        padding: 0 40px;

        div.contentItems {
            width: 100%;
        }
    }

    .contentItems {
        width: 400px;
        height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 5px 4px 15px 3px rgba(215, 215, 215, 0.75);
        border-radius: 20px;
        padding: 18px;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        flex-direction: column;

        .total {
            width: 112px;
            height: 28px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            h5 {
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.11em;
                color: #000000;
            }
            p {
                font-weight: 500;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.11em;
                color: #a4161a;
            }
        }
    }

    button {
        width: 244px;
        height: 50px;
        border: 2px solid #1c8a27;
        border-radius: 20px;
        background: transparent;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.11em;
        color: #1c8a27;
        cursor: pointer;
    }
`;
