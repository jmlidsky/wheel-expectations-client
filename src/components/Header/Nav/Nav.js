import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/bikes" className="nav-link">Bike Guide</Link>
                    </li>
                    <li>
                        <Link to="/parts" className="nav-link">Parts</Link>
                    </li>
                    <li>
                        <Link to="/safety" className="nav-link">Safety & Etiquette</Link>
                    </li>
                    <li>
                        <Link to="/find-shops" className="nav-link">Find Shops</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
