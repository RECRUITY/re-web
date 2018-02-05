/* External dependencies */
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${props => props.bgColor || 'red'};
  color: white;
  opacity: 0.3;
  animation: ${rotate360} 2s linear infinite;
`;

export default Button;
