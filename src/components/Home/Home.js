import React, { Component } from 'react';
import BikesHero from './Hero/BikesHero'
import PartsHero from './Hero/PartsHero'
import SafetyHero from './Hero/SafetyHero'
import FindShopsHero from './Hero/FindShopsHero'
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <section>
                    <h2>For the beginner or the advanced rider.</h2>
                    <p>A place to educate yourself about bikes & bike safety.</p>
                </section>
                <section>
                    <BikesHero />
                </section>
                <section>
                    <PartsHero />
                </section>
                <section>
                    <SafetyHero />
                </section>
                <section>
                    <FindShopsHero />
                </section>
            </div>
        );
    }
}

export default Home;