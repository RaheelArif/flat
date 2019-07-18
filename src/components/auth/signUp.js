import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class SignUp extends Component {
    state = {
        email: undefined,
        password: undefined,
        user: undefined,
        alreadyTaken: false
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
                            placeholder="name"
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
                            placeholder="phone"
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
                        {this.state.alreadyTaken === true ? <p className="taken">email already exist</p> : null}

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

                        <button className="signup-button">Sign Up</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default SignUp;
