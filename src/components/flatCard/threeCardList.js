import React, { Component } from "react";
import FlatCard from "./flatCard"
import {connect} from "react-redux"
import {Grid} from "@material-ui/core"
class ThreeCardList extends Component {
constructor(props){
    super(props);
    this.state={
        view:3
    }
}
changeView=()=>{
    this.setState({
        view:this.state.view+6
    })
}
    render() {
        return (
            <div className="three-flat-card">
                <h1>Search Your Dream Home</h1>
                {/* <div className="row"> */}
                    <Grid container lg={10}>
                {
                    this.props.properties.length>0&&this.props.properties.map((prop,key)=>{
                        if(key<this.state.view)
                        return <FlatCard property={prop}/>
                    })
    }
                </Grid>           
                {/* </div> */}
                <button className="search-btn" onClick={this.changeView}>View More </button>  
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