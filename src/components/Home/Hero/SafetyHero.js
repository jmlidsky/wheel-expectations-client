import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SafetyHero extends Component {
  render() {
    return (
      <Link to="/safety" className="hero-wrapper">
        <h3>Safety & Etiquette</h3>
        <p>Tips & rules of the road as a bike commuter. </p>
      </Link>
    );
  }
}

export default SafetyHero;