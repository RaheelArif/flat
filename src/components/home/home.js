import React, { Component } from "react";
import SearchBG from "../search/searchBG";
import ThreeCardList from "../flatCard/threeCardList";
import ClientReview from "../clientReview/clientReview";
class Home extends Component {
    state={
        filter:{}
    }
    changeFilter=(filter)=>{
        this.setState({filter:filter})
    }

    render() {
        return (
            <div>
               <SearchBG changeFilter={this.changeFilter}/>
               <ThreeCardList filter={this.state.filter}/>
               <ClientReview />

            </div>
        )
    }
}
export default Home;
