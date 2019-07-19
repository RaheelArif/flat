import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            Bedrooms:undefined,
            Bathrooms:undefined,
            City:undefined,
            Purpose:undefined,
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleFilter=()=>{
        this.props.changeFilter(this.state);
    }
    render() {
        return (
            <div className="search-bar">
                <div className="search-bar-bg">
                <select className="search-field" required id="Purpose"
                     onChange={this.handleChange}
                     value={this.state.Purpose}
                     >
                    <option value={undefined} selected disabled hidden>Purpose</option>
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                </select>

                <select className="search-field" required id="Bedrooms"
                     onChange={this.handleChange}
                     value={this.state.Bedrooms}
                     >
                    <option value={undefined}  selected disabled hidden>BedRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select className="search-field" required id="Bathrooms"
                     onChange={this.handleChange}
                     value={this.state.Bathrooms}
                     >
                    <option value={undefined}  selected disabled hidden>BathRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select className="search-field" required id="City"
                     onChange={this.handleChange}
                     value={this.state.City}
                     >
                    <option value={undefined}  selected disabled hidden>City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                 <button className="search-btn" onClick={this.handleFilter}>Search</button>
                 </div>
            </div>
        );
    }
}
export default SearchBar;
