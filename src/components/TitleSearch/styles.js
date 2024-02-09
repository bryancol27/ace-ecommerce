import styled from '@emotion/styled';

export const TitleSearchS = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 30px 0;

    @media (max-width: 450px) {
        flex-direction: column;

        h2 {
            margin-bottom: 100px;
        }

        form {
            width: 100% !important;
            input {
                width: 100% !important;
                margin-bottom: 10px;
            }
        }
    }

    h2 {
        /* heading1 */

        /* font-family: 'Raleway'; */
        font-style: normal;
        font-weight: 500;
        font-size: 35px;

        text-align: center;
    }

    form {
        input {
            width: 513px;
            height: 37px;

            border: 1px solid #000000;
            border-radius: 25px;

            padding: 0 0 0 20px;

            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;

            &::placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                /* align-items: center; */

                padding: 0 0 0 20px;

                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                letter-spacing: 0.11em;
            }
        }
    }

    button {
        width: 182px;
        height: 36px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 36px;
        text-align: center;
        color: #a4161a;
        background-color: transparent;

        border: 1px solid #a4161a;
        border-radius: 25px;
    }
`;
