import React, { Component } from "react";
import FlatCard from "./flatCard"
import {connect} from "react-redux"
import {Grid} from "@material-ui/core"
class ThreeCardList extends Component {
constructor(props){
    super(props);
    this.state={
        view:3,
        del_but:false,
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
                    <Grid container lg={10} md={10} x1={10} >
                {
                    this.props.properties.length>0&&this.props.properties.map((prop,key)=>{
                        if(key<this.state.view)
                        return <FlatCard property={prop} aprove_but={false} del_but={this.props.admin._id&&true||false}/> 
                    })
    }
                </Grid>
                {
                    this.state.view<=this.props.properties.length&&
                <button className="search-btn" onClick={this.changeView}>View More </button>  
                }
             </div>
        )
    }
}
 const mapStateToProps=(store)=>{
     return{
         properties:store.propertyReducer,
         admin:store.adminReducer
     }
 }
export default connect(mapStateToProps)(ThreeCardList);