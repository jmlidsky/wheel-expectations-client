import React, { Component } from 'react';
import Context from '../../Context'
import BikeFilterList from './BikeFilterList'
import './BikeFilterForm.css';

class BikeFilterForm extends Component {
  static contextType = Context

  constructor(props) {
    super(props)
    this.state = {
      bikes: [],
      category: " ",
    }
  }

  handleCategoryFilter = (filter) => {
    this.setState({
      category: filter
    })
  }

  render() {
    const { bikes } = this.context
    const filteredBikes = bikes.filter((bike) => {
      return bike.bike_category.includes(this.state.category)
    })

    return (
      <div className="bike-filter-form-container">
        <h2 className="bike-filter-form-header">What type of bike are you looking for?</h2>
        <form className="bike-filter-form">
          <label htmlFor="category">Choose a Category:</label>
          <select onChange={e => this.handleCategoryFilter(e.target.value)}>
            <option value=" "></option>
            <option value="Road">Road</option>
            <option value="Mountain">Mountain</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Specialty">Specialty</option>
          </select>
        </form>
        <BikeFilterList filteredBikes={filteredBikes} />
      </div>
    )
  }
}

export default BikeFilterForm;