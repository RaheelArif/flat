import React, { Component } from "react";
import ContactForm from "./contactForm"
import "../../App.css"
class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-left">
                    <h1>Get in Touch With Us</h1>
                    <p style={{marginTop: "-20px"}}>if you have any kind or confusion then contact with us</p>
                    <div className="contact-adress-container">
                        <h3 className="contact-adress">Adress</h3>
                        <p className="contact-p">kolkata india </p>
                    </div>
                    <div className="contact-adress-container">
                        <h3 className="contact-adress">Phone</h3>
                        <p className="contact-p">1234567890</p>
                    </div>
                    <div className="contact-adress-container">
                        <h3 className="contact-adress">Email</h3>
                        <p className="contact-p">realestate@gmail.com </p>
                    </div>
                </div>
                <div className="right-contact">
                    <ContactForm />
                </div>
            </div>
        )
    }
}
export default Contact;