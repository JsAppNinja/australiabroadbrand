import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withRouter } from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
