import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FindShopsHero extends Component {
  render() {
    return (
      <Link to="/find-shops" className="hero-wrapper">
        <h3>Find Shops</h3>
        <p>Search for a local shop near you.</p>
      </Link>
    );
  }
}

export default FindShopsHero;