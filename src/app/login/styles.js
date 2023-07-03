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
        form.formBox {
            padding: 0 36px;
            width: 100%;
        }
    }

    form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 494px;
        gap: 1.5rem;

        div {
            width: 100%;
            margin-bottom: 20px;

            label {
                display: flex;
                gap: 0.5rem;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                letter-spacing: 0.11em;
                margin-bottom: 20px;
                color: #000000;
            }

            input {
                width: 100%;
                height: 68px !important;

                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 20px;
                padding: 0px 20px;

                font-size: 28px;
            }
        }
    }

    button {
        width: 244px;
        height: 50px;
        border: 2px solid #a4161a;
        border-radius: 20px;
        background: transparent;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.11em;
        color: #a4161a;
        cursor: pointer;
    }
`;
