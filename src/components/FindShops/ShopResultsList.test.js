import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ShopResultsList from './ShopResultsList';

it('renders without crashing', () => {
    const results = []
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ShopResultsList results={results} />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
