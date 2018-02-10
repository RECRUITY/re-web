/* External dependencies */
import styled, { css } from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';

const Button = styled.button`
  width:  ${props => props.width || 140}px;
  height: ${props => props.height || 43}px;
  border-radius: ${props => props.radius || 3}px;
  background-color: transparent;
  color: ${colors.purpleishBlue};
  border: 1px solid ${colors.purpleishBlue};
  cursor: pointer;
  
  ${props => props.primary && css`
    background-color: ${colors.purpleishBlue};
    color: white;
  `}
`;

export default Button;
