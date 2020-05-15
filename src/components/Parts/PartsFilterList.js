import React, { Component } from 'react';
import Context from '../../Context'
import './PartsFilterList.css'

class PartsFilterList extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      currentPartIndex: null
    }
  }

  handleButtonClick(index) {
    this.setState({ currentPartIndex: index })
  }

  renderPart(part, index, currentPartIndex) {
    return (
      <div className="parts-filter-list-item" key={part.id}>
        <button className="part-name-button" key={index} onClick={() => this.handleButtonClick(index)}>
          {part.part_name}
        </button>
        {(currentPartIndex === index) && <div className="part-description">{part.part_description}</div>}
      </div>
    )
  }

  render() {
    const { currentPartIndex } = this.state

    return (
      <div className="parts-filter-list-container">
        {this.props.filteredParts.map((part, index) =>
          this.renderPart(part, index, currentPartIndex)
        )}
      </div>
    )
  }
}

export default PartsFilterList;