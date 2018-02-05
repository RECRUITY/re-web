/* External dependencies */
import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${props => props.bgColor || 'red'};
  color: white;
`;

export default Button;
