import React, { Component } from 'react';
import ReactPlayer from "react-player"
import './Safety.css';

class Safety extends Component {
  render() {
    return (
      <div className="safety">
        <h2>Safety & Etiquette</h2>
        <section className="helmets">
          <h3>Helmets</h3>
          <ul>
            <li>Always wear a properly fitted helmet that has been certified by the Consumer Product Safety Commission (CPSC).</li>
            <li>Replace any helmet that is damaged or has been involved in a crash.</li>
          </ul>
          <ReactPlayer url="https://www.youtube.com/watch?v=o61feDjSQ_0" controls />
        </section>
        <section className="be-seen">
          <h3>Be Seen</h3>
          <ul>
            <li>Wear bright-colored clothing.</li>
            <li>If you plan to ride at night, wear reflective clothing & use lights (red light for the back & white for the front).</li>
          </ul>
        </section>
        <section className="rules-of-the-road">
          <h3>Rules of the Road</h3>
          <ul>
            <li>Bicyclists must follow the same rules as motorists.</li>
            <li>Ride single-file in the direction of traffic.</li>
            <li>Use <a href="https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/8009-handsignals.pdf" target="_blank" rel="noopener noreferrer">hand signals</a> when turning.</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Safety;