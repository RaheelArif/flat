import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import house from "../../images/house.jpg";
import {Grid } from "@material-ui/core";


export default function MediaCard(props) {
const {property}=props;
  return (
    <Grid item lg={4} >
    <Card className="flat-card">
      <CardActionArea>
        <CardMedia
          className="card-image"
          image={"http://localhost:900"+property.file}
          title="Contemplative Reptile"
        />
        <CardContent className="flat-card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {property.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {property.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-footer">
         <span>bathroom:{property.bathrooms}</span>
         <span>bedrooms:{property.bedrooms}</span>
         <span>price:{property.price}</span>
      </CardActions>
    </Card>
    </Grid>
  );
}
