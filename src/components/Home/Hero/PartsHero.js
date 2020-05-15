import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PartsHero extends Component {
  render() {
    return (
      <div className="parts-hero">
        <h2>
          <Link to="/parts">Bike Parts</Link>
        </h2>
        <p>Learn the technical jargon for basic bike parts.</p>
      </div>
    );
  }
}

export default PartsHero;