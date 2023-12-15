import styled, { keyframes } from 'styled-components';

const spinnerAnim = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const SpinnerStyle = styled.img`
  animation: ${spinnerAnim} 2s linear infinite;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
`;

export default SpinnerStyle;
