/* External dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import SignUpForm from '../../components/SignUpForm';
import actions from '../../redux/actions';

const mapDispatchToProps = {
  signUp: actions.managerActions.signUp,
};

@connect(null, mapDispatchToProps)
class SignIn extends React.Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
  }

  @autobind
  handleSignUp(manager) {
    return this.props.signUp({ manager });
  }

  render() {
    return (
      <div>
        <SignUpForm onSignIn={this.handleSignUp} />
      </div>
    );
  }
}

export default SignIn;
