import React, {Component} from "react";
import {connect } from "react-redux"
class Messages extends Component{
    render(){
        return(
            <div>


            {
                this.props.messages.length>0&&
                this.props.messages.map((msg=>{
                    return<h1>{msg.name}</h1>
                }))
            }
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
    messages:store.messageReducer,
    }
}
export default connect(mapStateToProps)(Messages);