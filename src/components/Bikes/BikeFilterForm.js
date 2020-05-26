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
    }
  }

  render() {
    const { bikes } = this.context
    const filteredBikes = bikes.filter((bike) => {
      return bike.bike_category.includes(this.context.category)
    })

    return (
      <div className="bike-filter-container">
        <h3 className="bike-filter-form-header">Find a Bike That’s Right for You</h3>
        <form className="bike-filter-form">
          <label htmlFor="select a category" className="bike-filter-label">Select a Category</label>
          <select className="select-category" onChange={e => this.context.setCategory(e.target.value)}>
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