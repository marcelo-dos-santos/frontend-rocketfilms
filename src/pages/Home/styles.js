import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 128px auto 30px;
    grid-template-areas: 
    "header"
    "userinterface"
    "content";
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
    grid-area: content;
    margin: 0 110px;
    overflow-y: auto;
`

export const UserInterface = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 123px;
    gap: 56vw;

    > h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
        color: ${({theme}) => theme.COLORS.WHITE};
        white-space: nowrap;
        margin-right: 10px;
    }
`

