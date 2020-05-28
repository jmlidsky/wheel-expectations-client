import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BikeFilterList from './BikeFilterList'

it('renders without crashing', () => {
    const filteredBikes = []
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BikeFilterList filteredBikes={filteredBikes} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
