import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NOTE};
    border: none;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-align: left;
        margin-top: 15px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
        gap: 8px;
    }
`

export const Rating = styled.div`
    width: 100%;
    display: flex;
    align-items: left;
    margin-top: 8px;

    .Star{
        color: ${({theme}) => theme.COLORS.PINK};

    &.isActive {
        fill: ${({theme}) => theme.COLORS.PINK};
    }
}
`

export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .Star{
        color: ${({theme}) => theme.COLORS.PINK};

    &.isActive {
        fill: ${({theme}) => theme.COLORS.PINK};
    }
}
`