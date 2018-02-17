/* External dependencies */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './SignInForm.styled';
import InputField from '../../elements/InputField';

@reduxForm({
  form: 'signIn',
})
class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }

  @autobind
  handleSubmit() {
  }

  renderEmailField(props) {
    const { input } = props;
    return (
      <InputField
        label="e-mail"
        onChange={input.onChange}
      />
    );
  }

  renderPasswordField(props) {
    const { input } = props;
    return (
      <InputField
        label="PW"
        type="password"
        onChange={input.onChange}
      />
    );
  }

  render() {
    return (
      <Styled.Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="email" component={this.renderEmailField} />
        <Field name="password" component={this.renderPasswordField} />
        <button type="submit">
          로그인!!
        </button>
      </Styled.Form>
    );
  }
}

export default SignInForm;
