import React, { Component } from "react";
import { connect } from "react-redux";
import about from "../../images/house.jpg"
class ViewFlatCard extends Component {

    render() {
        const post = this.props.properties
        console.log(post, "post")
        return (
            <div className="view-c">
                <div className="about">
                    <div className="about-left">
                        <h1>post  ka title</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam labore eos quasi voluptas itaque harum ullam quis fugiat animi necessitatibus, architecto delectus mollitia, nam culpa nobis doloribus nostrum minus at.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid explicabo obcaecati, officiis, quod sequi possimus dicta minima nam quo odit, ea dignissimos vitae quibusdam quasi veritatis at ut maxime!
                        </p>
                    </div>
                    <div className="about-right">
                        <img src={about} alt="about us image" />
                    </div>
                </div>
                <div className="v-p-border">
                    <div className="view-properties">
                        <span className="view-span">Bedrooms : <span className="view-value">3</span></span>
                        <span className="view-span">Bathrooms : <span className="view-value">3</span></span>
                        <span className="view-span">City : <span className="view-value">faisalabad</span></span>
                        <span className="view-span">Price : <span className="view-value">30000</span></span>
                        <span className="view-span">Purpose : <span className="view-value">rent</span></span>
                    </div>
                </div>
                    <div style={{marginTop:"20px"}}>
                        <input className="offer" type="text"/>
                        <button className="offer-btn">Bid</button>
                    </div>
            </div>

        )
    }
}
const mapStateToProps = (store) => {
    return {
        properties: store.propertyReducer
    }
}
export default connect(mapStateToProps, null)(ViewFlatCard);