import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';



class CreatePost extends Component {
    state = {
        Title:undefined,
        Price:undefined,
        Description:undefined,
        Bedrooms:undefined,
        Bathrooms:undefined,
        City:undefined,
        Purpose:undefined,
        Time:undefined
    }
    handleClick=(e)=>{
        e.preventDefault();
        let data= new FormData();
        data.append("title",this.state.Title)
        data.append("price",this.state.Price)
        data.append("description",this.state.Description)
        data.append("bathrooms",this.state.Bathrooms)
        data.append("bedrooms",this.state.Bedrooms)
        data.append("purpose",this.state.Purpose)
        data.append("timeLimit",this.state.Time)
        data.append("city",this.state.City)
        data.append("image",document.getElementById("image").files[0])
        data.append("date",Date.now());
        data.append("approved",this.props.approved)
        fetch("http://localhost:900/property/addproperty",{
            method:"POST",
            body:data
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                console.log(res)
                this.setState({
                    Title:undefined,
                    Price:undefined,
                    Description:undefined,
                    Bedrooms:undefined,
                    Bathrooms:undefined,
                    City:undefined,
                    Purpose:undefined,
                    Time:undefined
                })
            }
        })
        .catch(err=>console.log(err));
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {




        return (
            <form autoComplete="off" onSubmit={this.handleClick} >

                <TextField
                    id="outlined-full-width"
                    className="contact-input"
                    style={{ margin: 8 }}
                    placeholder="Title"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,

                    }}
                    required={true}
                    id="Title"
                    onChange={this.handleChange}
                />
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="Price"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="number"
                    required={true}
                    onChange={this.handleChange}
                    id="Price"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    fullWidth
                    style={{ margin: 8 }}
                    rowsMax="4"
                    margin="normal"
                    variant="outlined"
                    placeholder="Description"
                    required
                    onChange={this.handleChange}
                    id="Description"
                />
                <select className="create-prodect-select" required id="Bedrooms"
                                    onChange={this.handleChange}
                >
                    <option value="" selected disabled hidden>Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select className="create-prodect-select" required id="Bathrooms"
                
                onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select className="create-prodect-select" required id="Purpose"
                                    onChange={this.handleChange}
                >
                     <option value="" selected disabled hidden>Purpose</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                </select>
                <select className="create-prodect-select" required id="Time"
                                    onChange={this.handleChange}
                >
                     <option value="" selected disabled hidden>Time Limit</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Month</option>
                    <option value="3">3 Month</option>
                    <option value="4">4 Month</option>
                    <option value="5">5 Month</option>
                </select>
                 <select className="create-prodect-select" required id="City"
                                     onChange={this.handleChange}
                 >
                      <option value="" selected disabled hidden>City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru" >Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata" >Kolkata</option>
                </select>
                <input type="file" name="image" style={{margin:"20px"}} required id="image"/>
                
     <button className="search-btn" type="submit" >Add property</button>
                
            </form>
        );
    }
}
export default CreatePost;