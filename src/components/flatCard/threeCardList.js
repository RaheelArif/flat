import React, { Component } from "react";
import FlatCard from "./flatCard"
import {connect} from "react-redux"
class ThreeCardList extends Component {


    render() {
        return (
            <div className="three-flat-card">
                <h1>Search Your Dream Home</h1>
                <div className="row">
                    
                {
                    this.props.properties.length>0&&this.props.properties.map(prop=>{
                        return <FlatCard property={prop}/>
                    })
    }
                </div>
                <button className="search-btn">View More </button>             
            </div>
        )
    }
}
 const mapStateToProps=(store)=>{
     return{
         properties:store.propertyReducer
     }
 }
export default connect(mapStateToProps)(ThreeCardList);