import React, { Component } from 'react';
import Context from '../../Context'
import './Parts.css';

class Parts extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      parts: [],
      status: "Essential",
      currentPartIndex: null
    }
  }

  handleStatusFilter = (filter) => {
    this.setState({
      status: filter
    })
    console.log(filter)
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
    const filteredParts = parts.filter((part) => {
      return part.status.includes(this.state.status)
    })

    return (
      <div>
        <h2>Bike Anatomy 101</h2>
        <form>
          <label htmlFor="status">Filter by:</label>
          <select onChange={e => this.handleStatusFilter(e.target.value)}>
            <option value="Essential">Essential Parts</option>
            <option value="Optional">Non-Essential Parts</option>
          </select>
        </form>
        {filteredParts.map((part, index) =>
          this.renderPart(part, index, currentPartIndex)
        )}
      </div>
    )
  }
}

export default Parts;