import React, { Component } from "react";
import about from "../../images/about.jpg";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png";
import about4 from "../../images/about4.png";
class About extends Component {

    render() {
        return (
            <div>
                <div className="about">
                    <div className="about-left">
                        <h1>About Real Estate</h1>
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
                <div className="about-sold"> 
                    <img src={about1} alt="aboutus"/>
                    <img src={about2} alt="aboutus"/>
                    <img src={about3} alt="aboutus"/>
                    <img src={about4} alt="aboutus"/>
                </div>
            </div>

        )
    }
}
export default About;