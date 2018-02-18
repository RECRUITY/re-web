/* External dependencies */
import styled from 'styled-components';

/* Internal dependnecies */
import colors from '../../styles/colors';
import BaseInputLabel from '../../elements/InputField';
import BaseButton from '../../elements/Button';

const Form = styled.form`
  width: 425px;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  align-items: center;
  border: 1px solid ${colors.brownishGrey};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.brownishGrey};
`;

const Description = styled.div`
  margin: 6px 0 22px;
  font-size: 14px;
  color: ${colors.warmGreyTwo};
`;

const InputField = styled(BaseInputLabel)`
  &:not(:first-child) {
    margin-top: 13px;
  }
`;

const Button = BaseButton.extend`
  margin: 20px 47px 0 auto;
`;

export default {
  Form,
  Title,
  InputField,
  Description,
  Button,
};
