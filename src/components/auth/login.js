import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        email: undefined,
        password: undefined,
        user: undefined,
     
    }
    handleChange = (e) => {
        this.setState({

            [e.target.placeholder]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            user: newUser,
           
            email: undefined,
            password: undefined
        })
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-container2">

                

                <form className="login-form">
                    <TextField
                        id="outlined-full-width"
                        className="contact-input"
                        style={{ margin: 8 }}
                        placeholder="email"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,

                        }}
                    />
                    <TextField
                        id="outlined-full-width"
                        className="contact-input"
                        style={{ margin: 8 }}
                        placeholder="password"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,

                        }}
                    />

                    <button className="login-button" onClick={this.handleClick}>Login</button>
                    <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
                </form>
            </div>
            </div>
        )
    }
}
export default Login;
