import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SafetyHero extends Component {
  render() {
    return (
      <Link to="/safety" className="safety-hero">
        <h2>Safety & Etiquette</h2>
        <p>Tips & rules of the road as a bike commuter. </p>
      </Link>
    );
  }
}

export default SafetyHero;