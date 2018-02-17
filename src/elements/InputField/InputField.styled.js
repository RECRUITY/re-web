/* External dependencies */
import styled from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';
import BaseInput from '../../elements/Input';

const Wrapper = styled.div`
  display: flex;
  width: ${props => props.width}px;
  border-bottom: 1px solid ${colors.whiteGrey};
`;

const Label = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.warmGrey};
`;

const Input = BaseInput.extend`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  height: ${props => props.height}px;
`;

export default {
  Wrapper,
  Label,
  Input,
};
