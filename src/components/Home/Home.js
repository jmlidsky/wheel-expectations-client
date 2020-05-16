import React, { Component } from 'react';
import BikesHero from './Hero/BikesHero'
import PartsHero from './Hero/PartsHero'
import SafetyHero from './Hero/SafetyHero'
// import FindShopsHero from './Hero/FindShopsHero'
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <section className="hero">
                    <BikesHero />
                </section>
                <section className="hero">
                    <PartsHero />
                </section>
                <section className="hero">
                    <SafetyHero />
                </section>
                {/* <section className="hero">
                    <FindShopsHero />
                </section> */}
            </div>
        );
    }
}

export default Home;