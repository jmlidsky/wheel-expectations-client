import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FindShopsHero extends Component {
  render() {
    return (
      <Link to="/find-shops" className="hero-wrapper">
        <h2>Find Shops</h2>
        <p>Search for a local shop near you.</p>
      </Link>
    );
  }
}

export default FindShopsHero;