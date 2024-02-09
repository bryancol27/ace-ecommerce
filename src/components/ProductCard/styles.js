import styled from '@emotion/styled';

export const Card = styled.article`
    width: 315px;
    height: 405px;

    border: 1px solid #000000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 33px 50px 0;

    figure {
        border-radius: 20px;
        overflow: hidden;

        margin-bottom: 25px;
    }

    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        text-align: center;
        margin-bottom: 5px;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 0.11em;

        color: #4e73df;

        margin-bottom: 5px;
    }

    button {
        width: 172px;

        padding: 5px 0;
        border-radius: 20px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;

        color: white;
        background-color: #4e73df;

        cursor: pointer;
        border: 0px solid;

        &.active {
            background-color: transparent;
            border: 1px solid #4e73df;
            color: #4e73df;
        }
    }
`;
