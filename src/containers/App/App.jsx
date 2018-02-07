/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button from '../../elements/Button';
import {FormDiv, FormAttr, Attr, FormInput} from '../../elements/FormDiv';



class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      bgColor: 'red',
    };
  }

  handleClick() {
    this.setState(prev => ({
      ...prev,
      bgColor: prev.bgColor === 'red' ? 'green' : 'red',
    }));
  }

  render() {
    return (
      <div>
        <Button
          //bgColor={this.state.bgColor}
          onClick={this.handleClick}
        >
          Sign Up
        </Button>
        <FormDiv>
          <FormAttr>
            <Attr>Name</Attr>
          </FormAttr>
          <FormInput placeholder="Narae Keum" type="text" />
          
          
          
        </FormDiv>
      </div>
    );
  }
}

export default App;
