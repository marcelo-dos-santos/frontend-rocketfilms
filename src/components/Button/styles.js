import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    height: 48px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 400;

    &.deleteFilm {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.PINK};
    }

    &:disabled {
        opacity: 0.5;
    }
`