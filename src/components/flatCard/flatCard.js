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


export default function MediaCard() {

  return (
    <Card className="flat-card">
      <CardActionArea>
        <CardMedia
          className="card-image"
          image={house}
          title="Contemplative Reptile"
        />
        <CardContent className="flat-card-content">
          <Typography gutterBottom variant="h5" component="h2">
            city
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-footer">
         <span>bathroom</span>
         <span>bedrooms</span>
         <span>price</span>
      </CardActions>
    </Card>
  );
}
