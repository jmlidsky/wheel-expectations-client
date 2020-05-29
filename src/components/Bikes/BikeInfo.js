import React, { Component } from 'react'
import Context from '../../Context'
import './BikeInfo.css'

class BikeInfo extends Component {
    static contextType = Context

    render() {
        const { bikes } = this.context
        const bikeId = + this.props.match.params.id
        const selectedBike = bikes.find(bike => {
            return bike.id === bikeId
        })
        
        // null check
        return selectedBike
            ? (
                <div className="bike-info-container">
                    <div className="bike-info">
                        <h4 className="bike-info-name">{selectedBike.bike_name}</h4>
                        <img src={selectedBike.bike_image} alt={selectedBike.bike_name} className="bike-image" />
                        <p className="bike-description">{selectedBike.bike_description}</p>
                    </div>
                    <div className="button-wrapper">
                        <button type="button" className="go-back-button" onClick={() => this.props.history.goBack()}>Back to Guide</button>
                    </div>
                </div>
            )
            : null
    }
}

export default BikeInfo;