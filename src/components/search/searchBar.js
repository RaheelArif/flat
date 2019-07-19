import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        
       
        Bedrooms:undefined,
        Bathrooms:undefined,
        City:undefined,
        Purpose:undefined,
  
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        return (
            <div className="search-bar">
                <div className="search-bar-bg">
                <select className="search-field" required id="Purpose"
                     onChange={this.handleChange}
                     value={this.state.Bedrooms}
                     >
                    <option value="" selected disabled hidden>For Rent</option>
                    <option value="yess">Yess</option>
                    <option value="no">No</option>
                </select>

                <select className="search-field" required id="Bedrooms"
                     onChange={this.handleChange}
                     value={this.state.Bedrooms}
                     >
                    <option value="">BedRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select className="search-field" required id="Bathrooms"
                     onChange={this.handleChange}
                     value={this.state.Bedrooms}
                     >
                    <option value="">BathRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select className="search-field" required id="City"
                     onChange={this.handleChange}
                     value={this.state.Bedrooms}
                     >
                    <option value="city">City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                 <button className="search-btn">Search</button>
                 </div>
            </div>
        );
    }
}
export default SearchBar;
