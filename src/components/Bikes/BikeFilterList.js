import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BikeFilterList.css'

class BikeFilterList extends Component {

    render() {
        return (
            <div className="bike-filter-list-container">
                <ul className="bike-filter-list">
                    {this.props.filteredBikes.map(bike =>
                        <li className="bike-filter-list-item" key={bike.id}>
                            <Link to={`/bikes/${bike.id}`} className="bike-name">{bike.bike_name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default BikeFilterList;