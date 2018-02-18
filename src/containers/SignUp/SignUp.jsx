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
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  }

  @autobind
  handleSignUp(manager) {
    this.props.signUp({ manager })
      .promise
      .then(() => {
        this.props.history.push('/groups/new');
      }, () => {
        // todo: 에러처리
      });
  }

  render() {
    return (
      <div>
        <SignUpForm onSignUp={this.handleSignUp} />
      </div>
    );
  }
}

export default SignIn;
