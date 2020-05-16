import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PartsHero extends Component {
  render() {
    return (
      <Link to="/parts" className="parts-hero">
        <h2>Bike Parts</h2>
        <p>Learn the technical jargon for basic bike parts.</p>
      </Link>
    );
  }
}

export default PartsHero;