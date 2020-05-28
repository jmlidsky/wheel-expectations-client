import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import PartsFilterList from './PartsFilterList';

it('renders without crashing', () => {
    const filteredParts = []
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <PartsFilterList filteredParts={filteredParts} />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
