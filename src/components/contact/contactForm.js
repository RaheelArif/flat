import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CreatePost from './createPost';


 class ContactForm extends Component {
state ={
    Name: undefined,
    Email: undefined,
    Message: undefined,
    Subject: undefined,
    Property:false,
    id:undefined
}

handleChange =(e) => {
this.setState({
    [e.target.placeholder]: e.target.value
})
console.log(this.state)
}
        handleClick =(e)=> {
            e.preventDefault()
           const message = {
               name: this.state.Name,
               email: this.state.Email,
               message: this.state.Message,
               subject: this.state.Subject,
           }

            console.log(message)
            fetch("http://localhost:900/messages/addmessage",{
            method:"POST",
            body:JSON.stringify(message),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                console.log(res)
                this.setState({
                    Name: undefined,
                    Email: undefined,
                    Message: undefined,
                    Subject: undefined,
                    })
            }
        })
        .catch(err=>console.log(err));
        }

    render() {


  

        return (
            <div>
            <form  autoComplete="off" onSubmit={this.handleClick}>

                <TextField
                    id="outlined-full-width"
                    className="contact-input"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    Name="Name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.Name}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,

                    }}
                    required
                />
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    type="email"
                />
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="Subject"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    fullWidth
                    style={{ margin: 8 }}
                    rowsMax="4"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                    placeholder="Message"
                    required

                />
     <button className="search-btn" type="submit">Send Message</button> 
            </form>
                <CreatePost approved={false} />
                </div>
        );
    }
}
export default ContactForm;