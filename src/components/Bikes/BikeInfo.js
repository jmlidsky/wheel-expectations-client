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
                <div className="bike-info-container">
                    <div className="bike-info">
                        <img src={selectedBike.bike_image} alt={selectedBike.bike_name} className="bike-image" />
                        <h2>{selectedBike.bike_name}</h2>
                        <p>{selectedBike.bike_description}</p>
                    </div>
                    <div>
                        <button type="button" className="go-back-button" onClick={() => this.props.history.goBack()}>Back to Guide</button>
                    </div>
                </div>
            )
            : null
    }
}

export default BikeInfo;