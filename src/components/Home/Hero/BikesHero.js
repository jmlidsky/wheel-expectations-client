import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BikesHero extends Component {
  render() {
    return (
      <Link to="/bikes" className="bikes-hero">
        <h2>Bike Guide</h2>
        <p>In the market for a bike, but don't know which type to buy?</p>
        <p>Find the right one for you!</p>
      </Link>
    );
  }
}

export default BikesHero;