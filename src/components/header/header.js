import React from 'react';
import { makeStyles,withStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import Admin from "./admin"
import User from "./user"
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

 class Header extends React.Component {
   componentWillMount(){
    fetch("http://localhost:900/user/authenticate",{
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
                this.props.dispatch({type:"ADD_USER",payload:res.user})
                alert("loggedin");
            }
        })
        .catch(err=>console.log(err));
        fetch("http://localhost:900/property/getallproperty",{
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
   }
   render(){
     const {classes}=this.props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
        <Link className="nav-logo" to="/">  Real Estate</Link>
          </Typography>
          <Link className="nav-link" to="/"> <Button color="inherit">Home</Button></Link>
          <Link className="nav-link" to="/about"> <Button color="inherit">About us</Button></Link>
          <Link className="nav-link" to="/Contact"> <Button color="inherit">Contact</Button></Link>
          {
            this.props.user._id&&
          <User name={this.props.user.name}/> ||
          this.props.admin._id&&
          <Admin />||
          <Link className="nav-link" to="/Login"> <Button color="inherit">Login</Button></Link>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
        }
}
const mapStateToProps=(store)=>{
  return{
    user:store.userReducer,
    admin:store.adminReducer
  }
}
export default connect(mapStateToProps)(withStyles(useStyles)(Header));