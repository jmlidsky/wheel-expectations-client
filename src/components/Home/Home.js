import React, { Component } from 'react';
import BikesHero from './Hero/BikesHero'
import PartsHero from './Hero/PartsHero'
import SafetyHero from './Hero/SafetyHero'
import FindShopsHero from './Hero/FindShopsHero'
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <BikesHero />
                <PartsHero />
                <SafetyHero />
                <FindShopsHero />
           </div>
        );
    }
}

export default Home;