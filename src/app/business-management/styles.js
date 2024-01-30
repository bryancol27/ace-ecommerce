import styled from '@emotion/styled';

export const MainBussinesMangement = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    figure.ace_logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 0px;
        padding: 0px;

        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #1f2225;
        margin-bottom: 70px;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .CTA_description {
        max-width: 550px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        color: #1f2225;
        margin-top: 15px;
        margin-bottom: 50px;
    }

    .title_no_organization {
        font-size: 24px;
        color: #1f2225;
    }
`;

export const MainBussinessProducts = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    .title_organization {
        font-size: 24px;

        margin-bottom: 35px;
        color: #1f2225;
    }

    .cotainer_buttons {
        display: flex;
        gap: 25px;
    }
`;
