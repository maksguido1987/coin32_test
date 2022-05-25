import styled from 'styled-components';

export const GamesStyled = styled.section`
  width: 100%;

  & .home-page {
    &__title {
      font-size: 36px;
      line-height: 40px;
      font-weight: bold;

      margin: 0 0 5px 0;

      @media (min-width: 768px) {
        font-size: 72px;
        line-height: 74px;
        margin: 0 0 10px 0;
      }
    }
  }

  & .games-container {
    width: 100%;
    display: grid;
    gap: 20px;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;
