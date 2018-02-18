/* External dependencies */
import styled from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';

const Button = styled.button`
  width: ${props => props.width || 140}px;
  height: ${props => props.height || 43}px;
  border-radius: ${props => props.radius || 3}px;
  background-color: ${colors.purpleishBlue};
  color: ${colors.white};
  border: 1px solid ${colors.purpleishBlue};
  font-size: ${props => props.fontSize || 16}px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${colors.purpleBlue};
  }
`;

export default Button;
