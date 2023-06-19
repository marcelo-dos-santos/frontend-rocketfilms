import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    height: 48px;
    border: 0;
    padding: 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }
`