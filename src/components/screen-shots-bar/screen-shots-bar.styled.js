// @ts-nocheck
import styled from 'styled-components';

export const ScreenShotsStyled = styled.div`
  position: relative;

  width: 100%;
  height: 0;

  padding: 0 0 56% 0;

  overflow: hidden;

  & .visible {
    visibility: visible;
  }

  & .hidden {
    visibility: hidden;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ScreenShotsArrowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: 1;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(-50%)
    ${(props) => (props.rotate ? `rotate(${props.rotate}deg)` : `rotate(0)`)};
  background: url('/icons/carousel-arrow.png') center / cover no-repeat;

  cursor: pointer;
`;
