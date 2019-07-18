import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import {withRouter} from "react-router-dom";
class SignUp extends Component {
    state = {
        email: undefined,
        password: undefined,
        phone:undefined,
        name:undefined,
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
            password: this.state.password,
            phone:this.state.phone,
            name:this.state.name
        }
        console.log(newUser)
        fetch("http://localhost:900/user/register",{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                console.log(res)
                alert("registered");
                this.setState({
                    email: undefined,
                    password: undefined,
                    phone:undefined,
                    name:undefined,
                })
                this.props.history.push("/login")
            }
            else if(res.used)
            {
                this.setState({
                    alreadyTaken:true
                })
            }
        })
        .catch(err=>console.log(err));
       
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-container2">



                    <form className="login-form" onSubmit={this.handleClick} >
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
                            type="number"
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
                            type="email"
                        />
                        {this.state.alreadyTaken === true ? <p className="taken">Email already exist</p> : null}

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
                            type="password"
                        />

                        <button className="signup-button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default withRouter(SignUp);
