/* External dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import Button from '../../elements/Button';
import actions from '../../redux/actions';

const mapDispatchToProps = {
  signOut: actions.managerActions.signOut,
};

@connect(null, mapDispatchToProps)
class Group extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }

  @autobind
  handleSignOut() {
    this.props.signOut()
      .promise
      .then(() => {
        this.props.history.replace('/signin');
      });
  }

  render() {
    return (
      <div>
        로그인이 되어있기때문에 이곳에 들어올 수 있다!
        <Button onClick={this.handleSignOut}>
          로그아웃
        </Button>
      </div>
    );
  }
}

export default Group;
