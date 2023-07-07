import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;

    ::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ff859b;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #ff6c85;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};

    > div {
      display: flex;
      align-items: center;
    }
  }

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;
    gap: 10px;
    display: flex;
    align-items: center;
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .Star {
    color: ${({ theme }) => theme.COLORS.PINK};

    &.isActive {
      fill: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 24px;
  font-size: 16px;

  > div {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
      margin: 0;
    }
  }

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > .updated {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
`;

export const TagFilm = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  align-items: center;
`;
