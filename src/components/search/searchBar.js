import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <div className="search-bar">
                <div className="search-bar-bg">
                <select className="search-field">
                    <option>For Rent</option>
                    <option>Yess</option>
                    <option>No</option>
                </select>
                <select className="search-field">
                    <option>BedRooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select className="search-field">
                    <option>BathRooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                </select>
                <select className="search-field">
                    <option>City</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                </select>
                 <button className="search-btn">Search</button>
                 </div>
            </div>
        );
    }
}
export default SearchBar;
