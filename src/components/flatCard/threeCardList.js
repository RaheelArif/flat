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
 post:[]
    }
}
componentDidMount(){
    this.filteritems()
}
changeView=()=>{
    this.setState({
        view:this.state.view+6
    })
}
componentDidUpdate(prevprops)
{
    if(prevprops.filter!=this.props.filter||prevprops.properties!=this.props.properties)
    this.filteritems()

}
filteritems=()=>{
    const {filter}=this.props
    var pos=this.props.properties.filter((prop,key)=>{
            
    if(!filter.Bedrooms&&!filter.Bathrooms&&!filter.Purpose&&!filter.City)
    {
        return prop.approved==true
    }
    else {if(filter.Bedrooms)
    {
        return prop.bedrooms==filter.Bedrooms
    }
     if(filter.Bathrooms)
    {
        return prop.bathrooms==filter.Bathrooms
    }
     if(filter.Purpose)
    {
        return prop.purpose==filter.Purpose
    }
     if(filter.City)
    {
        return prop.city==filter.City
    }
}
})
console.log(filter)
console.log(pos)
this.setState({post:pos})
}
    render() {
        const {post}=this.state
        return (
            <div className="three-flat-card">
                <h1>Search Your Dream Home</h1>
                    <Grid container lg={10} md={10} x1={10} >
                {
                    post.length>0&&post.map((prop,key)=>{
                        if(key<this.state.view)
                        return <FlatCard property={prop} aprove_but={false} del_but={this.props.admin._id&&true||false}/> 
                    })
    }
                </Grid>
                {
                    this.state.view<this.state.post.length&&
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