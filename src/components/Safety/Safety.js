import React, { Component } from 'react';
// import ReactPlayer from "react-player"
import './Safety.css';

class Safety extends Component {
  render() {
    return (
      <div className="safety-container">
        <h2 className="safety-header">Safety & Etiquette</h2>
        <div className="safety-section-container">
          <section className="helmets safety">
            <h3>Helmets</h3>
            <ul className="safety-list">
              <li>Always wear a <a href="https://www.youtube.com/watch?v=o61feDjSQ_0" target="_blank" rel="noopener noreferrer" className="link-target">properly fitted helmet</a> that has been certified by the Consumer Product Safety Commission (CPSC).</li>
              <li>Replace any helmet that is damaged or has been involved in a crash.</li>
            </ul>
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=o61feDjSQ_0" controls /> */}
          </section>
          <section className="be-seen safety">
            <h3>Be Seen</h3>
            <ul className="safety-list">
              <li>Wear bright-colored clothing.</li>
              <li>If you plan to ride at night or when visibility is poor, wear reflective clothing.</li>
              <li>Use lights: A white front light that is visible from at least 500 feet and a rear red light.</li>
            </ul>
          </section>
          <section className="rules-of-the-road safety">
            <h3>Rules of the Road</h3>
            <ul className="safety-list">
              <li>Bicyclists must obey all traffic signs, signals, lights, and markings.</li>
              <li>Ride on the right side of the road in the direction of traffic.</li>
              <li>Use <a href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/8009-handsignals.pdf" target="_blank" rel="noopener noreferrer" className="link-target">hand signals</a> when turning.</li>
              <li>Check the law to make sure sidewalk riding is legal.</li>
            </ul>
          </section>
          <section className="before-heading-out safety">
            <h3>Before Heading Out</h3>
            <ul className="safety-list">
              <li>Inspect your bike to make certain all parts are working properly.</li>
              <li>Check that the tires are inflated.</li>
              <li>Tuck and tie shoe laces and pant legs so they don't get caught in the bike chain.</li>
              <li>Plan your route. Your safest route my be away from traffic, in a bike lane, or on a bike path.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Safety;