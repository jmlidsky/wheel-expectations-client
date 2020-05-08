import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SafetyHero extends Component {
  render() {
    return (
      <div className="safety-hero">
        <h2>
          <Link to='/safety'>Safety & Etiquette</Link>
        </h2>
        <p>Tips & rules of the road as a bike commuter. </p>
      </div>
    );
  }
}

export default SafetyHero;