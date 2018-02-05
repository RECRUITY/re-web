/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button from '../../elements/Button';

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
          bgColor={this.state.bgColor}
          onClick={this.handleClick}
        >
          나의 첫 버튼
        </Button>
      </div>
    );
  }
}

export default App;
