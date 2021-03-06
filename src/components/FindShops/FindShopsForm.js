
import React, { Component } from 'react'
import config from '../../config'
import ShopResultsList from './ShopResultsList'
import YELP_LOGO from '../../images/yelp_logo.png'
import './FindShopsForm.css'

const createURL = (location) => {
    const address = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
    const url = `${address}term=bike+shop&location=${location}&radius=24140`;
    return url;
}

class FindShopsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: [],
            location: " ",
        }
    }

    handleSearch = () => {
        const fullURL = createURL(
            this.state.location
        )

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-requested-with": "xhr",
                "Authorization": `Bearer ${config.REACT_APP_YELP_API_KEY}`,
            }
        }

        fetch(fullURL, options)
            .then(response => {
                // console.log(response)
                // if (!response.ok) {
                //     throw new Error("Something went wrong, please try again later.")
                // }
                return response.json();
            })
            .then(data => {
                this.setState({
                    businesses: data.businesses
                })

                // console.log(data.businesses)
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleSearch();
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    render() {
        const { location } = this.state
        const isEnabled = location.length > 0 && location.match(/^([a-zA-Z0-9]+)$/)
        return (
            <div className="find-shops-container">
                <h2 className="find-shops-form-header">Find Shops Near You</h2>
                <form className="find-shops-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="enter your location" className="find-shops-label">Enter Your Location</label>
                    <input
                        type="text"
                        name="find-shops"
                        className="find-shops-input"
                        placeholder="City, State, or Zip"
                        onChange={this.handleLocationChange}
                        required
                    />
                    <button type="submit" className="search-button" disabled={!isEnabled}>Search</button>
                </form>
                <div className="yelp-logo-wrapper">
                    <h4>Powered by</h4>
                    <img src={YELP_LOGO} alt="yelp-logo" className="yelp-logo" />
                </div>
                <ShopResultsList results={this.state.businesses} />
            </div>
        );
    }
}

export default FindShopsForm;