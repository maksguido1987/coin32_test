import styled from 'styled-components';

export const LogoStyled = styled.a`
  position: relative;

  width: 100%;
  max-width: 100px;
  height: 50px;

  box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);
  -webkit-box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);
  -moz-box-shadow: 0px 2px 10px 3px rgba(255, 255, 255, 0.19);

  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    max-width: 200px;
    height: 100px;
  }
`;

export const SearchIconStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 12px;
  height: 12px;

  @media (min-width: 640px) {
    top: 50%;
    left: 15px;

    width: 15px;
    height: 15px;
  }
`;
