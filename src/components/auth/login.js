import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Link ,withRouter} from "react-router-dom";
import { connect } from 'react-redux'
class Login extends Component {
    state = {
        email: undefined,
        password: undefined,
        user: undefined,
     
    }
     admin={_id: "9088098211Wasd@#sad",
         email: "kushal@gmail.com",
          password: "kushal123",
         name: "kushal",}
    handleChange = (e) => {
        this.setState({

            [e.target.placeholder]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.email===this.admin.email&&this.state.password===this.admin.password)
        {
            this.props.dispatch({type:"ADD_ADMIN",payload:this.admin})
            this.props.history.push("/");
            fetch("http://localhost:900/property/getall",{
                method:"POST",
                body:"",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.success)
                {
                    this.props.dispatch({type:"ADD_Property",payload:res.properties})
                }
            })
            .catch(err=>console.log(err));
            fetch("http://localhost:900/messages/getallmessages",{
                method:"POST",
                body:"",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.success)
                {
                    this.props.dispatch({type:"ADD_MESSAGE",payload:res.messages})
                }
            })
            .catch(err=>console.log(err));
            fetch("http://localhost:900/bids/getallbids",{
            method:"POST",
            body:"",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                this.props.dispatch({type:"ADD_BID",payload:res.bids})
            }
        })
        .catch(err=>console.log(err));
        }
        else{
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            success:true
        }
        console.log(newUser);
        fetch("http://localhost:900/user/login",{
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
                this.props.dispatch({type:"ADD_USER",payload:res.user})
                alert("loggedin");
                this.setState({
                    email: undefined,
                    password: undefined,
                })
                console.log(res.user)
                this.props.history.push("/");
            }
            else
            this.setState({success:false})
        })
        .catch(err=>console.log(err));
    }
    }
    render() {
        
        return (
            <div className="login-container">
                <div className="login-container2">

                

                <form className="login-form" onSubmit={this.handleClick}>
                {this.state.success === false ? <p className="taken">Email or Password is Incorrect</p> : null}
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

                    <button className="login-button" >Login</button>
                    <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
                </form>
            </div>
            </div>
        )
    }
}
export default withRouter(connect()(Login));
