/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

/* Internal dependencies */
import App from './containers/App';
import redux from './redux';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  body {
    font-family: MalgunGothic;
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider store={redux.getStore()}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
