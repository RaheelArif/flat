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
                    <p>To facilitate its users to buy/ sell/ rent properties even on the go, the Real Estate has also come up with all new website for users. They can now search properties & contact owners/agents even when on the move.</p>
                </div>
                <div className="right-footer">
                    <h2> Real Estate Best Properties</h2>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer1} alt="footer1"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Kolkata</span>
                                <span className="f-price">1234890 INR</span>
                            </div>
                        </div>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer2} alt="footer2"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Hyderabad</span>
                                <span className="f-price">13400000 INR</span>
                            </div>
                        </div>
                        <div className="footer-imgs">
                            <img width="100px" height="100px" src={footer3} alt="footer3"/>
                            <div style={{display: "flex", flexDirection: "column" ,justifyContent:"space-around", marginLeft: "10px"}}>
                                <span className="f-city">city</span>
                                <span className="f-city">Mumbai</span>
                                <span className="f-price">100030 INR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;