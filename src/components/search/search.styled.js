import styled from 'styled-components';

export const SearchContainerStyled = styled.div`
  width: 100%;
`;

export const SearchlabelStyled = styled.label`
  display: block;
  width: 100%;
  position: relative;

  border-radius: 20px;
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  padding: 10px 0 10px 40px;

  font-size: 18px;
  color: inherit;

  background-color: var(--gray);

  border-radius: 20px;
  border: none;
  outline: none;
  transition: color 0.2s, background-color 0.2s, opacity 0.2s,
    width 0.05s linear;

  &:focus,
  :hover {
    background-color: var(--white);
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }

  &::placeholder {
    color: var(--white);
    font-size: 14px;
    opacity: 0.6;
  }
`;
