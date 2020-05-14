import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BikeFilterList extends Component {

    render() {
        return (
            <div>
                <ul className="bike-filter-list">
                    {this.props.filteredBikes.map(bike =>
                        <li key={bike.id}>
                            <Link to={`/bikes/${bike.id}`}>{bike.bike_name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default BikeFilterList;