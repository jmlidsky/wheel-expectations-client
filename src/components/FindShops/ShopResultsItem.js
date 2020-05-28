import React, { Component } from 'react'
import './ShopResultsItem.css'

class ShopResultsItem extends Component {

    render() {
        // console.log(this.props.business)
        const { business } = this.props
        return (
            <div className="shop-results-list-item">
                <a href={business.url} className="shop-name" target="_blank" rel="noopener noreferrer">{business.name}</a>
                <p>{business.location.display_address[0]}</p>
                <p>{business.location.display_address[1]}</p>
                <p>{business.location.display_address[2]}</p>
                <div>{business.display_phone}</div>
            </div>
        );
    }
}

export default ShopResultsItem;