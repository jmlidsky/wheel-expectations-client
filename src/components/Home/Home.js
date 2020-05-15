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
                <div className="home-header">
                    <h2>For the beginner or the advanced rider.</h2>
                    <p>A place to educate yourself about bikes & bike safety.</p>
                </div>
                <div className="home-section-container">
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
            </div >
        );
    }
}

export default Home;