import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid } from "@material-ui/core";
import {Link} from "react-router-dom"


export default function MediaCard(props) {
const {property}=props;
 if(property.title.length > 20){
     property.title = property.title.slice(0, 25) + "...";
 } 
 if(property.description.length > 90){
  property.description = property.description.slice(0, 87) + "...";
} 
  return (
    <Grid item lg={4} md={4} xl={4}>
    <Card className="flat-card">
    <Link to="/propert/:id">
      <CardActionArea>
        <CardMedia
          className="card-image"
          image={"http://localhost:900"+property.file}
          title="House image"
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
      </Link>
      {

(props.approve_but||props.del_but)?<CardActions>
        {
          props.approve_but&&
              <button className="approve">approve post</button>
        }
         {
          props.del_but&&
              <button className="delete">delete post</button>
        }
      </CardActions>
      :null
      }
    </Card>
    </Grid>
  );
}
