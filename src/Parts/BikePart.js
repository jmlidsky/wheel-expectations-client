import React, { Component } from 'react';
import Context from '../Context'
import './BikePart.css';

class BikePart extends Component {
    static contextType = Context

    render() {
        const { parts } = this.context

        return (
            <div className="bike-part ">
                <div className="part-name">{this.props.part_name}</div>
                <div className="part-description">{this.props.part_description}</div>
            </div>
        );
    }
}

export default BikePart;