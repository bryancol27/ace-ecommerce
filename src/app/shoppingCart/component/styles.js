import styled from '@emotion/styled';

export const ItemContent = styled.div`
    width: 100%;
    height: 69px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        img {
            object-fit: contain;
            border-radius: 50%;
            border: 1px solid black;
        }

        h3 {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.11em;
            color: #000000;
        }
    }

    .prices {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        p {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.11em;
        }

        .numBlack {
            color: #000000;
        }

        .numRed {
            color: #a4161a;
        }
    }
`;
