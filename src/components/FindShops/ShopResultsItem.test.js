import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShopResultsItem from './ShopResultsItem'

it('renders without crashing', () => {
    const business = {
        location: {
            display_address: [0, 1, 2]
        }
    }
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ShopResultsItem business={business} />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
