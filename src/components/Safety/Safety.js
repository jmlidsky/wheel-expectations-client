import React, { Component } from 'react';
import './Safety.css';

class Safety extends Component {
  render() {
    return (
      <div className="safety-container">
        <h3 className="safety-header">Safety & Etiquette</h3>
        <div className="safety-section-container">
          <section className="safety-wrapper">
            <h4 className="safety-section-header">Helmets</h4>
            <ul className="safety-list">
              <li>Always wear a <a href="https://www.youtube.com/watch?v=o61feDjSQ_0" target="_blank" rel="noopener noreferrer" className="link-target">properly fitted helmet</a> that has been certified by the Consumer Product Safety Commission (CPSC).</li>
              <li>Replace any helmet that is damaged or has been involved in a crash.</li>
            </ul>
          </section>
          <section className="safety-wrapper">
            <h4 className="safety-section-header">Be Seen</h4>
            <ul className="safety-list">
              <li>Wear neon, fluorescent, or bright colors when riding during the day or at night.</li>
              <li>If you plan to ride at night or when visibility is poor, wear something that reflects light.</li>
              <li>Your bike should also have a white front light that is visible from at least 500 feet and a red rear reflector.</li>
            </ul>
          </section>
          <section className="safety-wrapper">
            <h4 className="safety-section-header">Before Heading Out</h4>
            <ul className="safety-list">
              <li>Inspect your bike to make certain all parts are working properly, especially your brakes.</li>
              <li>Check that the tires are inflated to the recommended pressure.</li>
              <li>Tuck and tie shoe laces and pant legs so they don't get caught in the bike chain.</li>
              <li>Plan your route. Your safest route may be away from traffic, in a bike lane, or on a bike path.</li>
            </ul>
          </section>
          <section className="safety-wrapper">
            <h4 className="safety-section-header">Rules of the Road</h4>
            <ul className="safety-list">
              <li>Bicyclists must obey all traffic signs, signals, lights, and markings.</li>
              <li>Ride on the right side of the road in the direction of traffic.</li>
              <li>Use <a href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/8009-handsignals.pdf" target="_blank" rel="noopener noreferrer" className="link-target">hand signals</a> when turning.</li>
              <li>Ride far enough away from parked cars to avoid drivers opening doors or pulling out.</li>
              <li>Check the law to make sure sidewalk riding is legal.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Safety;