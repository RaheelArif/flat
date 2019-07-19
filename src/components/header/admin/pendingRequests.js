import React, {Component} from "react";
import {connect} from "react-redux"
import FlatCard from "../../flatCard/flatCard"
import {Grid} from "@material-ui/core"
class PendingRewuest extends Component{
    render(){
        return (
            <div className="three-flat-card">
                <h1>Search Your Dream Home</h1>
                    <Grid container lg={10} md={10} x1={10} >
                {
                    this.props.properties.length>0&&this.props.properties.map((prop,key)=>{
                        if(!prop.approved)
                        return <FlatCard property={prop} approve_but={true}  del_but={this.props.admin._id&&true||false}/> 
                    })
    }
                </Grid>
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
export default connect(mapStateToProps)(PendingRewuest);