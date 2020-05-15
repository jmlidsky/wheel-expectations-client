import React, { Component } from 'react';
import './PageNotFound.css';

class PageNotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <h2>Page Not Found</h2>
                <p>This page does not exist. Try going back or using the navigation menu.</p>
            </div>
        );
    }
}

export default PageNotFound;