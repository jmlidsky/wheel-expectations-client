import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>
                    <Link to="/" className="logo">Wheel Expectations</Link>
                </h1>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                    <nav>
                        <ul className="nav-list menu nav">
                            <li>
                                <Link to="/bikes" className="nav-link">Bike Guide</Link>
                            </li>
                            <li>
                                <Link to="/parts" className="nav-link">Bike Parts</Link>
                            </li>
                            <li>
                                <Link to="/safety" className="nav-link">Safety & Etiquette</Link>
                            </li>
                            <li>
                                <Link to="/find-shops" className="nav-link">Find Shops</Link>
                            </li>
                        </ul>
                    </nav>
                    <label htmlFor="nav-toggle" className="nav-toggle-label">
                        <span></span>
                    </label>
            </header>
        );
    }
}

export default Header;