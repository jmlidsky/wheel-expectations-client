import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TypesHero extends Component {
  render() {
    return (
      <div className="types-hero">
        <h2>
          <Link to='/types'>Types of Bikes</Link>
        </h2>
        <p>In the market for a bike, but don't know which type to buy?</p>
        <p>Find the right one for you!</p>
      </div>
    );
  }
}

export default TypesHero;