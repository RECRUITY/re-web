/* External dependencies */
import styled from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';
import BaseInput from '../../elements/Input';

const Label = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transition: color 0.15s ease-in-out;
`;

const Input = BaseInput.extend`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  height: ${props => props.height}px;
`;

// stylelint-disable
const Wrapper = styled.div`
  display: flex;
  width: ${props => props.width}px;
  border-bottom: 1px solid ${props => (props.focused ? colors.purpleishBlue : colors.whiteGrey)};
  transition: border-bottom 0.15s ease-in-out;

  ${Label} {
    color: ${props => (props.focused ? colors.gunmetal : colors.warmGrey)};
  }
`;
// stylelint-enable

export default {
  Wrapper,
  Label,
  Input,
};
