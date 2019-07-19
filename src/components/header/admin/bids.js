import React, { Component } from "react";
import { connect } from "react-redux";

class Bids extends Component {
    render() {
        console.log(this.props.properties)
        return (
            <div>
              <h1>bids</h1>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        properties: store,
        user: store.userReducer
    }
}
export default connect(mapStateToProps)(Bids);