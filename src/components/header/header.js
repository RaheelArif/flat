import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

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
          <Link className="nav-link" to="about"> <Button color="inherit">About us</Button></Link>
          <Link className="nav-link" to="Contact"> <Button color="inherit">Contact</Button></Link>
          <Link className="nav-link" to="Login"> <Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}