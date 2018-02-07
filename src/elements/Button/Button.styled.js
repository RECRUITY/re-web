/* External dependencies */
import styled, { keyframes } from 'styled-components';

/*
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
*/

/*
const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${props => props.bgColor || 'red'};
  color: white;
  opacity: 0.3;
`;
*/

const Button = styled.button`
  background-color: #7e55f3;
  width: 123px;
  height: 35px;
  border-radius: 20px;
  border:0px;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
`

export default Button;
