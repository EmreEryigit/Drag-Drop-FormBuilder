import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import DemoBar from './demobar';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <App />,
  document.getElementById('form-builder'),
);

ReactDOM.render(
  <DemoBar />,
  document.getElementById('demo-bar'),
);


