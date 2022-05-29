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

export const SpinnerStyled = styled.div`
  width: 50px;
  height: 50px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  background: url('/icons/spinner.png') center / cover no-repeat;

  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
