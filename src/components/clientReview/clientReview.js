import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from "./Slider"

const styles = theme => ({
container: {
    display: "flex",
    justifyContent:"center",
    paddingTop:"60px",
},
p: {
    display:"flex",
    margin:"0px",
    color: "#666",

},
h1: {
    margin:"0px",
},


});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <Grid container className={classes.container}>

            <Grid item style={{flexDirection: "column"}} xs={9} >
                <h1 className={classes.h1} >Testimonials</h1>
                <p className={classes.p}>Creating a sustainable future through building preservation, green architecture, and smart design.</p>
            </Grid>
            <Grid  item xs={9}>
                 <Slider />
            </Grid>

        </Grid>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);