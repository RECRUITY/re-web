/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button from '../../elements/Button';
import InputLabel from '../../elements/InputLabel';

const App = () => (
  <div>
    <Button>
      내보내기
    </Button>
    <Button primary>
      미리보기
    </Button>
    <InputLabel>
      e-mail
    </InputLabel>
  </div>
);

export default App;
