import React from "react";
import {NavLink} from "react-router-dom"
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function MobileNavigation({ mobileOpen = false, handleDrawerToggle = () => console.log("no handleDrawerToggle function provided"), drawerWidth = 240 }) {
  // Define the 'item' variable for the second list item
  const item = "Add Car";

  // Move the 'drawer' JSX outside of the 'Drawer' component's 'sx' property
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Cars App
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton sx={{ textAlign: 'left' }} component={NavLink} to="/" >
            <ListItemText primary={"List Cars"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }} component={NavLink} to="/">
            <ListItemText primary={"Add Cars"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box component="nav" >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer} {/* Render the 'drawer' JSX here */}
      </Drawer>
    </Box>
  )
}

export default MobileNavigation;
