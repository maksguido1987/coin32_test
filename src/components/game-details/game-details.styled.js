import styled from 'styled-components';

export const DetailsContainerStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  & .subtitle {
    font-weight: 600;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DetailsInfoStyled = styled.div`
  flex: 1 1 50%;

  & .details-game {
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
    }

    &__name {
      overflow-wrap: break-word;
      text-align: center;
      font-size: 36px;
      line-height: 40px;

      margin: 20px 0;

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    &__released {
      font-weight: 300;
      color: var(--black);
      text-align: center;

      padding: 1px 5px;

      border-radius: 5px;
      background-color: var(--white);
    }

    &__playtime {
      font-size: 12px;
      letter-spacing: 2px;
    }

    &__website {
      text-decoration: none;
    }

    &__website-link {
      color: #ff4747;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const DetailsImagesStyled = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 640px) {
    display: flex;
    gap: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GamePlatformsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;

  & .platform {
    text-decoration: underline;
  }
`;

export const GameGenresStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;

  & .genre {
    text-decoration: underline;
  }
`;

export const MainImageStyled = styled.div`
  position: relative;

  width: 100%;
  height: 0;

  padding: 0 0 56% 0;

  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
