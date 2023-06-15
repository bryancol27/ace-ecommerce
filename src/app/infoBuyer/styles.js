import styled from '@emotion/styled';

export const MainStyled = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    h1 {
        font-weight: 500;
        font-size: 35px;
        line-height: 51px;
        text-align: center;
        color: #000000;
    }

    .contentInfo {
        width: 739px;
        height: 409px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 25px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 20px 0px;

        .title {
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.11em;
            color: #000000;
        }

        .item__title {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.11em;
            color: #000000;
        }

        .item {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.11em;
            color: #000000;
        }

        .product {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(164, 22, 26, 0.5);


            .content__item {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }

        .content__others {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;

            padding: 0px 50px;
        }

        .place {
            border: 1px solid rgba(164, 22, 26, 0.5);
            border-left: 0px;
            border-right: 0px;
        }
    }

    .content__select {
        width: 100%;
        max-width: 739px;
        display: flex;
        justify-content: flex-end;

        select {
            width: 262px;
            height: 69px;
            border: 2px solid #929292;
            border-radius: 5px;
            font-size: 28px;
        }
    }
`;
