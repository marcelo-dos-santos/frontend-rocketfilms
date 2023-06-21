import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    grid-area: header;
    height: 115px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            text-align: right;
        }
        
        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Logo = styled.div`
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
`

export const Search  = styled.div`
    width: 630px;
    display: flex;
    align-self: center;
    align-items: center;
`