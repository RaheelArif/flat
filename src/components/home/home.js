import React, { Component } from "react";
import SearchBG from "../search/searchBG";
import ThreeCardList from "../flatCard/threeCardList";
import ClientReview from "../clientReview/clientReview";
class Home extends Component {

    render() {
        return (
            <div>
               <SearchBG />
               <ThreeCardList />
               <ClientReview />

            </div>
        )
    }
}
export default Home;
