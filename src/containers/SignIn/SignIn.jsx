/* External dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import SignInForm from '../../components/SignInForm';
import actions from '../../redux/actions';

const mapDispatchToProps = {
  signIn: actions.managerActions.signIn,
};

@connect(null, mapDispatchToProps)
class SignIn extends React.Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  }

  @autobind
  handleSignIn(manager) {
    this.props.signIn({ manager })
      .promise
      .then(() => {
        this.props.history.push('/group');
      });
  }

  render() {
    return (
      <div>
        <SignInForm onSignIn={this.handleSignIn} />
      </div>
    );
  }
}

export default SignIn;
