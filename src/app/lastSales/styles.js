import styled from '@emotion/styled';

export const MainStyled = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 450px) {
        padding: 0 28px;
    }

    h1 {
        font-weight: 500;
        font-size: 35px;
        line-height: 51px;
        text-align: center;
        color: #000000;
    }
    .contentItems {
        max-width: 1382px;
        width: 100%;
        height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 5px 4px 15px 3px rgba(215, 215, 215, 0.75);
        border-radius: 20px;
        padding: 18px;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        flex-direction: column;
    }
`;
