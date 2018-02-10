/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Input from '../../elements/Input';
import AddGroupButton from '../../elements/AddGroupButton';

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
          <img src='../../image/plus.png' />
        </AddGroupButton>
      </div>
    );
  }
}

export default App;
