import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
        margin-right: 150px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-align: left;
        margin-right: 24px;
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.PINK};

        > svg {
            margin-right: 8px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`