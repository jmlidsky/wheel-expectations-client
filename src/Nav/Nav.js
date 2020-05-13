import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navigation">
                <ul className='nav-list'>
                    <li>
                        <Link to='/types' className="nav-link">Types</Link>
                    </li>
                    <li>
                        <Link to='/parts' className="nav-link">Parts</Link>
                    </li>
                    <li>
                        <Link to='/safety' className="nav-link">Safety & Etiquette</Link>
                    </li>
                    {/* <li>
                        <Link to='/find-shops'>Find Shops</Link>
                    </li> */}
                </ul>
            </nav>
        );
    }
}

export default Nav;
