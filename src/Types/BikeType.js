import React, { Component } from 'react';
import Context from '../Context'
import './BikeType.css';

class BikeType extends Component {
    static contextType = Context
    render() {
        const { types } = this.context
        const bikeId = this.props.match.params.id
        const selectedBike = types.find(type =>
            type.id === bikeId)

        // null check
        return selectedBike 
        ? (
            <div className="bike-body">
                <h2>{selectedBike.bike_name}</h2>
                <p>{selectedBike.bike_description}</p>
            </div>
        )
        : <></>
    }
}

export default BikeType;