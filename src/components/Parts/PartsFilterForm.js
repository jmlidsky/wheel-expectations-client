import React, { Component } from 'react';
import Context from '../../Context'
import PartsFilterList from './PartsFilterList'
import BIKE_PARTS from '../../images/bike_parts.jpg'
import './PartsFilterForm.css';

class PartsFilterForm extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      parts: [],
      status: "Essential",
    }
  }

  handleStatusFilter = (filter) => {
    this.setState({
      status: filter
    })
  }

  render() {
    const { parts } = this.context;
    const filteredParts = parts.filter((part) => {
      return part.status.includes(this.state.status)
    })

    return (
      <div className="parts-filter-container">
        <h2 className="parts-filter-form-header">Getting to Know Your Bike</h2>
        <div className="bike-parts-image-wrapper">
          <img src={BIKE_PARTS} alt="bike-parts" className="bike-parts-image" />
        </div>
        <form className="parts-filter-form">
          <label htmlFor="filter by" className="parts-filter-label">Filter By</label>
          <select className="select-filter" onChange={e => this.handleStatusFilter(e.target.value)}>
            <option value="Essential">Essential Parts</option>
            <option value="Optional">Non-Essential Parts</option>
          </select>
        </form>
        <PartsFilterList filteredParts={filteredParts} />
      </div>
    )
  }
}

export default PartsFilterForm;