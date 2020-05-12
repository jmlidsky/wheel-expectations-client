import React, { Component } from 'react';
import Context from '../Context'
// import BikePart from './BikePart'
import './Parts.css';

class Parts extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      parts: [],
      currentPartIndex: null
    }
  }

  handleButtonClick(index) {
    this.setState({ currentPartIndex: index })
  }

  renderPart(part, index, currentPartIndex) {
    return (
      <div className="bike-part" key={part.id}>
        <button className="part-name" key={index} onClick={() => this.handleButtonClick(index)}>
          {part.part_name}
        </button>
        {(currentPartIndex === index) && <div className="part-description">{part.part_description}</div>}
      </div>
    )
  }

  render() {
    const { currentPartIndex } = this.state
    const { parts } = this.context;
    return (
      <div>
        {parts.map((part, index) =>
        this.renderPart(part, index, currentPartIndex)
        )}
      </div>
    )
  }
}

export default Parts;