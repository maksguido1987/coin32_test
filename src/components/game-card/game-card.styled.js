import styled from 'styled-components';

export const GameCardContainerStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--black-light);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);
    -webkit-box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);
    -moz-box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);
  }

  & .game-card {
    &__info {
      padding: 10px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-grow: 1;
    }
    &__link {
      flex: 1 1 auto;

      margin: 10px 0;

      color: var(--white);
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      text-decoration: none;
    }

    &__released {
      font-size: 12px;
      color: var(--gray);

      & > span {
        font-size: 16px;
        font-weight: 600;
        color: var(--white);
      }
    }
  }
`;

export const ImageContainerStyled = styled.div`
  position: relative;

  width: 100%;
  height: 0;

  padding: 0 0 56% 0;

  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const RatingStyled = styled.div`
  font-size: 12px;
  color: var(--gray);

  display: flex;
  align-items: center;
  gap: 5px;

  & > span {
    font-size: 16px;
    font-weight: 600;
    color: var(--white);
  }
`;
