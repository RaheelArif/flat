import React, { Component } from "react";
import FlatCard from "./flatCard"
class ThreeCardList extends Component {

    render() {
        return (
            <div className="three-flat-card">
                <h1>Search Your Dream Home</h1>
                <div className="row">

                <FlatCard />
                <FlatCard />
                <FlatCard /> 
                </div>
                <button className="search-btn">View More </button>             
            </div>
        )
    }
}
export default ThreeCardList;