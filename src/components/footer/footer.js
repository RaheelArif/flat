import React, { Component } from "react";
import footer1 from "../../images/footer1.jpg";
import footer2 from "../../images/footer2.jpg";
import footer3 from "../../images/footer3.jpg";
class Footer extends Component {

    render() {
        return (
            <div className="footer-container">
                <div className="left-footer">
                    <h1>Real Estate</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eligendi recusandae enim non voluptatum, vero culpa consequatur nemo repellat illo deserunt est atque explicabo aut repudiandae voluptas fugiat minus molestias.</p>
                </div>
                <div className="right-footer">
                    <h2> Real Estate Best Properties</h2>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer1} alt="footer1"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Town House</span>
                                <span className="f-price">$123489</span>
                            </div>
                        </div>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer2} alt="footer2"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Town House</span>
                                <span className="f-price">$123489</span>
                            </div>
                        </div>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer3} alt="footer3"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Town House</span>
                                <span className="f-price">$123489</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;