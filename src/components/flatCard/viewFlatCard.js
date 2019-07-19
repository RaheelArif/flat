import React, { Component } from "react";
import {connect} from "react-redux";
import about from "../../images/house.jpg"
class ViewFlatCard extends Component {

    render() {
        const post = this.props.properties
        console.log(post , "view flat post")
        return (
            <div>
                <div className="about">
                    <div className="about-left">
                        <h1>{post.title}</h1>
                        <h3>Our mission: To motivate and inspire people to get living the life they deserve.</h3>
                        <h3>When you look for a property, it’s not just a better home you seek, it’s a better future.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam labore eos quasi voluptas itaque harum ullam quis fugiat animi necessitatibus, architecto delectus mollitia, nam culpa nobis doloribus nostrum minus at.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid explicabo obcaecati, officiis, quod sequi possimus dicta minima nam quo odit, ea dignissimos vitae quibusdam quasi veritatis at ut maxime!
                    </p>
                    </div>
                    <div className="about-right">
                        <img src={about} alt="about us image" />
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps=(store)=>{
    return{
        properties:store.propertyReducer
    }
}
export default connect(mapStateToProps, null)(ViewFlatCard);