/* External dependencies */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import CreateGroupForm from '../../components/CreateGroupForm';

const mapDispatchToProps = {
  // signIn: actions.managerActions.signIn,
};

@connect(null, mapDispatchToProps)
class CreateGroup extends React.Component {
  static propTypes = {
    createGroup: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }

  @autobind
  handleCreate(group) {
    this.props.createGroup({ group })
      .promise((action) => {
        this.props.history.replace(`/groups/${action.group.id}`);
      }, () => {
        // todo: 에러 처리
      });
  }

  render() {
    return (
      <div>
        <CreateGroupForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default CreateGroup;
