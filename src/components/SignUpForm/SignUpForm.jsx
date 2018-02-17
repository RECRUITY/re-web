/* External dependencies */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './SignUpForm.styled';

@reduxForm({
  form: 'signUp',
})
class SignUpForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
  }

  @autobind
  handleSubmit(manager) {
    this.props.onSignIn(manager);
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

  renderNameField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="name"
        placeholder="이름을 입력해주세요."
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

  renderConfirmPasswordField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="PW확인"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        onChange={input.onChange}
      />
    );
  }

  render() {
    return (
      <Styled.Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Styled.Title>Recruiting</Styled.Title>
        <Styled.Description>We help you in your recruitment</Styled.Description>
        <Field name="email" component={this.renderEmailField} />
        <Field name="name" component={this.renderNameField} />
        <Field name="password" component={this.renderPasswordField} />
        <Field name="confirmPassword" component={this.renderConfirmPasswordField} />
        <Styled.Button
          type="submit"
          width={120}
          height={35}
          radius={17}
        >
          회원가입
        </Styled.Button>
      </Styled.Form>
    );
  }
}

export default SignUpForm;
