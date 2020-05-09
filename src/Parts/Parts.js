import React, { Component } from 'react';
import Context from '../Context'
import BikePart from './BikePart'
import './Parts.css';

class Parts extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    const { parts } = this.context

    return (
      <div className="parts">
        <h2>Bike Parts</h2>
        <div className="part-list">
          {parts.map(part =>
            <BikePart

              key={part.id}
              part_name={part.part_name}
              part_description={part.part_description}
            />
          )}
        </div>

        {/* <div className="part-list">
          {parts.map(part =>
            <div className="part" key={part.id}>
              <div className="part-header">{part.part_name}</div>
              <div className="part-body">{part.part_description}</div>
            </div>)}
        </div> */}
      </div>
    );
  }
}

export default Parts;