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
                        <h3>When you look for a property, it’s not just a better home you seek, it’s a better future.</h3>
                        <p>Real Estate is a high-end property portal that caters to a global market with its unique services and novel online features. Having been launched in the year 2019 by Group, Real Estate has quickly risen to being the No. 1 Property Portal in India.

                       The Real Estate design is based on rigorous research, unique product developments, and innovative initiative which has been readily accepted by users. In an attempt to best serve the users, features on the Real Estate realty portal are constantly invented, evaluated and upgraded.
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