import React from "react";
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import { useTheme } from '@mui/material/styles'

function DesktopNavigation({
    handleDrawerToggle = () =>
      console.log("no handleDrawerToggle function provided")
  }) {
    const theme = useTheme()
    console.log(theme)
    const lightTextColor = theme.palette.common.white
    return (
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: 'none', color: lightTextColor}}
          >
            CarsApp
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/add-car" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Add Car</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
  
  export default DesktopNavigation;