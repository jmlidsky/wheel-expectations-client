import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FindShopsHero extends Component {
  render() {
    return (
      <div className="find-shops-hero">
        <h2>
          <Link to='/find-shops'>Find Shops</Link>
        </h2>
        <p>Search for a local shop near you.</p>
      </div>
    );
  }
}

export default FindShopsHero;