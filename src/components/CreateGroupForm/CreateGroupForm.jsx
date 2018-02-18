/* External dependencies */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './CreateGroupForm.styled';

@reduxForm({
  form: 'signIn',
})
class SignInForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
  }

  renderNameField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="name"
        placeholder="그룹 이름을 입력해주세요."
        onChange={input.onChange}
      />
    );
  }

  renderDescriptionField(props) {
    const { input } = props;
    return (
      <Styled.InputField
        label="description"
        type="text"
        placeholder="그룹 설명을 입력해주세요."
        onChange={input.onChange}
      />
    );
  }

  render() {
    return (
      <Styled.Form onSubmit={this.props.handleSubmit(this.props.onCreate)}>
        <Styled.Title>New Group</Styled.Title>
        <Styled.Description>We help you in your recruitment</Styled.Description>
        <Field name="name" component={this.renderNameField} />
        <Field name="description" component={this.renderDescriptionField} />
        <Styled.Button
          type="submit"
          width={120}
          height={35}
          radius={17}
        >
          만들기
        </Styled.Button>
      </Styled.Form>
    );
  }
}

export default SignInForm;
