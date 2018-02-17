/* External dependencies */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './SignInForm.styled';

@reduxForm({
  form: 'signIn',
})
class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
  }

  renderEmailField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="e-mail"
        placeholder="e-mail을 입력해주세요."
        onChange={input.onChange}
      />
    );
  }

  renderPasswordField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="PW"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={input.onChange}
      />
    );
  }

  render() {
    return (
      <Styled.Form onSubmit={this.props.handleSubmit(this.props.onSignIn)}>
        <Styled.Title>Recruiting</Styled.Title>
        <Styled.Description>We help you in your recruitment</Styled.Description>
        <Field name="email" component={this.renderEmailField} />
        <Field name="password" component={this.renderPasswordField} />
        <Styled.Button
          type="submit"
          width={120}
          height={35}
          radius={17}
        >
          로그인
        </Styled.Button>
      </Styled.Form>
    );
  }
}

export default SignInForm;
