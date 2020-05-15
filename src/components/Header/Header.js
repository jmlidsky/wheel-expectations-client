import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav/Nav'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1>
              <Link to="/" className="title">Wheel Expectations</Link>
          </h1>
          <Nav />
      </div>
    );
  }
}

export default Header;
