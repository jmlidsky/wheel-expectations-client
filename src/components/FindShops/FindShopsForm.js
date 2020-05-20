
import React, { Component } from 'react'
import config from '../../config'
import './FindShopsForm.css';

const createURL = (location, sort_by) => {
    const address = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
    const url = `${address}term=bike+shop&location=${location}&radius=24140&sort_by=${sort_by}`;
    return url;
}

class FindShopsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: [],
            location:" ",
            sort_by: "best_match",
        }
    }

    handleSearch = () => {
        const fullURL = createURL(
            this.state.location,
            this.state.sort_by
        )

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.API_KEY}`
            }
        }

        fetch(fullURL, options)
            .then(response => {
                console.log(response)
                // if (!response.ok) {
                //     throw new Error("Something went wrong, please try again later.")
                // }
                return response.json();
            })
            .then(data => {
                this.setState({
                    businesses: data.businesses
                })

                console.log(data.businesses)
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

    handleSortByFilter = (filter) => {
        this.setState({
            sort_by: filter
        })
    }

    render() {
        return (
            <div className="find-shops-form-container">
                <form className="find-shops-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="find-shops">FindShops</label>
                    <input
                        type="text"
                        name="find-shops"
                        id="find-shops"
                        placeholder="Enter Location"
                        onChange={this.handleLocationChange}
                    />
                    <label htmlFor="sort-by-filter">Sort By:</label>
                    <select onChange={e => this.handleSortByFilter(e.target.value)}>
                        <option value="best_match">Best Match</option>
                        <option value="rating">Rating</option>
                        <option value="review_count">Review Count</option>
                        <option value="distance">Distance</option>
                    </select>
                    <button type="submit" className="submit-button">Let's Roll!</button>
                </form>
            </div>
        );
    }
}

export default FindShopsForm;