
import React, { Component } from 'react'
import ShopResultsItem from './ShopResultsItem'
import './ShopResultsList.css'


class ShopResultsList extends Component {

    render() {
        return (
            <div className="shop-results-list-container">
                {this.props.results.map(result => {
                    return (
                        <ShopResultsItem key={result.id} business={result} />
                    )
                })}
            </div>
        );
    }
}

export default ShopResultsList;