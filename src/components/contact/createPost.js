import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';



class CreatePost extends Component {
    state = {
        Bedrooms: [
            { number: 1 },
            { number: 2 },
            { number: 3 },
            { number: 4 },
            { number: 5 }
        ]
    }
    render() {




        return (
            <form autoComplete="off">

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
                />
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    fullWidth
                    style={{ margin: 8 }}
                    rowsMax="4"
                    margin="normal"
                    variant="outlined"
                    placeholder="Descroption"
                />
                <select className="create-prodect-select" >
                    <option >BedRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select className="create-prodect-select">
                    <option>BathRooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select className="create-prodect-select">
                    <option >Purpose</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                </select>
                <select className="create-prodect-select">
                    <option value="1">1 Month</option>
                    <option value="2">2 Month</option>
                    <option value="3">3 Month</option>
                    <option value="4">4 Month</option>
                    <option value="5">5 Month</option>
                </select>
                <TextField
                    id="outlined-full-width"
                    style={{ margin: 8 }}
                    placeholder="City"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}
export default CreatePost;