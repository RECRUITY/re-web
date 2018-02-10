/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Input from '../../elements/Input';
import AddGroupButton from '../../elements/AddGroupButton';
import Icon from '../../elements/Icon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Input placeholder="Input your name" type="text" />
        <AddGroupButton>
          add font
        </AddGroupButton>
        <Icon></Icon>
      </div>
    );
  }
}

export default App;
