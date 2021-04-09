import React, { Component } from 'react'
import BikesHero from './Hero/BikesHero'
import PartsHero from './Hero/PartsHero'
import SafetyHero from './Hero/SafetyHero'
import FindShopsHero from './Hero/FindShopsHero'
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <h2 className="welcome-header">Welcome to Wheel Expectations!</h2>
                <p className="welcome-description">Learn about the various types of bikes, their parts, and more!</p>
                <BikesHero />
                <PartsHero />
                <SafetyHero />
                <FindShopsHero />
           </div>
        );
    }
}

export default Home;