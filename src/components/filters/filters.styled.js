import styled from 'styled-components';

export const FiltersStyled = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
`;

export const FilterStyled = styled.div`

  position: relative;

  min-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 8px;
  background-color: var(--gray);

  cursor: pointer;

  & .filter-container {
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  & .filter-arrow {
    transition: transform 0.1s ease-in-out;
    &.open {
      transform: rotate(-180deg);
    }

    &.close {
      transform: rotate(0);
    }
  }

  & .filter-select {
    width: 100%;

    position: absolute;
    top: 100%;
    z-index: 5;

    padding: 8px;

    color: var(--black);

    border-radius: 10px;
    background-color: var(--white);
  }
`;
