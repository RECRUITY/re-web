/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

/* Internal dependencies */
import App from './containers/App';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
