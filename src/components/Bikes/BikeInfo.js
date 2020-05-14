import React, { Component } from 'react';
import Context from '../../Context'
import './BikeInfo.css';

class BikeInfo extends Component {
    static contextType = Context
    
    render() {
        const { bikes } = this.context
        const bikeId = this.props.match.params.id
        const selectedBike = bikes.find(bike => {
            return bike.id === bikeId
        })
        // null check
        return selectedBike
            ? (
                <div className="bike-body">
                    <h2>{selectedBike.bike_name}</h2>
                    <p>{selectedBike.bike_description}</p>
                </div>
            )
            : null
    }
}

export default BikeInfo;