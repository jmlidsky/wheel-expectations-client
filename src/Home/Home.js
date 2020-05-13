import React, { Component } from 'react';
import Hero from '../Hero/Hero'
import TypesHero from '../Hero/TypesHero'
import PartsHero from '../Hero/PartsHero'
import SafetyHero from '../Hero/SafetyHero'
// import FindShopsHero from '../Hero/FindShopsHero'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <section>
                    <Hero />
                </section>
                <section>
                    <TypesHero />
                </section>
                <section>
                    <PartsHero />
                </section>
                <section> 
                    <SafetyHero />
                </section>
                {/* <section> 
                    <FindShopsHero />
                </section> */}
            </div>
        );
    }
}

export default Home;