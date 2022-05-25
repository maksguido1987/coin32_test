import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1400px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  padding: 10px 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 20px;

  background-color: var(--black);

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`
