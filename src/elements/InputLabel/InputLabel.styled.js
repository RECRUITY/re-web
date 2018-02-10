/* External dependencies */
import styled from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';

const InputLabel = styled.div`
  width:  ${props => props.width || 50}px;
  height: ${props => props.height || 40}px;
  background-color: transparent;
  font-family: MalgunGothic;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.warmGrey};
  border-bottom: 1.5px solid ${colors.whiteGrey};
  padding: 9px 0 11px 0;
`;

export default InputLabel;
