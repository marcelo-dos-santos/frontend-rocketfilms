import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 16px;
    height: 56px;
    border-radius: 10px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`