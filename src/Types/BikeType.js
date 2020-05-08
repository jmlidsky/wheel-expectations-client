import React, { Component } from 'react';
import Context from '../Context'
import './BikeType.css';

class BikeType extends Component {
    static contextType = Context
    render() {
        //   console.log(this.props)
        const { types } = this.context
        const bikeId = this.props.match.params.id
        const selectedBike = types.find(type =>
            type.id === bikeId)
        console.log(types)
        return (
            <div className="bike-type">
                <h2>{selectedBike.bike_name}</h2>
            </div>
        )
    }
}

export default BikeType;