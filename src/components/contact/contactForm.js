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
}

handleChange =(e) => {
this.setState({
    [e.target.placeholder]: e.target.value
})
console.log(this.state)
}
        handleClick =()=> {
           const message = {
               Name: this.state.Name,
               Email: this.state.Email,
               Message: this.state.Message,
               Subject: this.state.Subject,
           }
            this.setState({
            Name: undefined,
            Email: undefined,
            Message: undefined,
            Subject: undefined,
            })
            
        }

    render() {


  

        return (
            <form  autoComplete="off">

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

                />
     <button className="search-btn" onClick={this.handleClick}>Send Message</button>
                <CreatePost />
            </form>
        );
    }
}
export default ContactForm;