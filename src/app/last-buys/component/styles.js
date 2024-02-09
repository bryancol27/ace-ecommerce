import styled from '@emotion/styled';

export const ItemContent = styled.div`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px;

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.11em;
        color: #000000;
    }

    .order {
        margin-bottom: 25px;
    }
`;
