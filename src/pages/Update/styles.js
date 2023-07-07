import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header"
    "content";

    .mark-row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    > main {
        overflow-y: auto;
        grid-area: content;

        ::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
        background-color: #FF859B;
        border-radius: 8px;
        }   

        ::-webkit-scrollbar-thumb:hover {
        background-color: #FF6C85;
        }
        
    }
`

export const Form = styled.form`
    max-width: 876px;
    margin: 38px auto;

    .input-row {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 40px;
    }

    .mark-row {
        display: flex;
        justify-content: flex-start;
        gap: 24px;
        padding: 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

    .button-row {
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }

    .button-row:nth-child(2){
        background-color: red;
    }

    > header {
        display: flex;
        flex-direction: column;
        margin-bottom: 36px;

        > span {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;

            > svg {
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }
    }

    a {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.PINK};
        margin-bottom: 24px;
    }
`