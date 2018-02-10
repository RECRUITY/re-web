/* External dependencies */
import styled, { css } from 'styled-components';

const Button = styled.button`
  width:  ${props => props.width || 140}px;
  height: ${props => props.height || 43}px;
  border-radius: ${props => props.radius || 3}px;
  background-color: transparent;
  color: #7e55f3;
  border: 1px solid #7e55f3;
  cursor: pointer;
  
  ${props => props.primary && css`
    background-color: #7e55f3;
    color: white;
  `}
`;

export default Button;