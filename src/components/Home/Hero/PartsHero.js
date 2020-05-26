import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PartsHero extends Component {
  render() {
    return (
      <Link to="/parts" className="hero-wrapper">
        <h3>Bike Parts</h3>
        <p>Learn the technical jargon for basic bike parts.</p>
      </Link>
    );
  }
}

export default PartsHero;