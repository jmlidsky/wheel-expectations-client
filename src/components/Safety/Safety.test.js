import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Safety from './Safety';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Safety />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
