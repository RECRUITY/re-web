/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import AddGroupButton from '../../elements/AddGroupButton';
import Icon from '../../elements/Icon';
import Word from '../../elements/Word';

const App = () => (
  <div>
    <Button>
      내보내기
    </Button>
    <Button primary>
      미리보기
    </Button>
    <Input placeholder="input your name" />
    <AddGroupButton>add font</AddGroupButton>
    <Icon>+</Icon>
    <Word bold size={20} >Sign Up</Word>
    <Word size={16} > 가입하기</Word>
  </div>
);

export default App;
