import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

 function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const logout=()=>{
    if(props.admin._id)
    {
      
                    props.dispatch({type:"DELETE_ADMIN",payload:{}})
                    alert("logout");
    }
    }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        className="admin-btn"
      >
{props.admin.name}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      
      >
        <StyledMenuItem>
        <Link style={{textDecoration:"none" , color: "black"}} to="/pendingrequests">  <ListItemText primary="Pending Requests" /></Link>
        </StyledMenuItem>   
        
         <StyledMenuItem>
        <Link style={{textDecoration:"none" , color: "black"}} to="/createpostadmin">  <ListItemText primary="Create Post" /></Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link style={{textDecoration:"none" , color: "black"}} to="/messages">     <ListItemText primary="Messages" /></Link>
        </StyledMenuItem>       
         {/* <StyledMenuItem>
          <Link style={{textDecoration:"none" , color: "black"}} to="/bids">     <ListItemText primary="Bids" /></Link>
        </StyledMenuItem> */}

        <StyledMenuItem onClick={logout}>
          <ListItemText primary="LogOut" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}
const mapStateToProps=(store)=>{
  return{
    admin:store.adminReducer
  }
}
export default connect(mapStateToProps)(CustomizedMenus)
