import React from "react";



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from "./HeaderStyle";
import { Theme } from "../Theme";
import { Hidden } from '@material-ui/core';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export default function Navbar() {
    const classes = useStyles();

    const navlinks=[
        {label:"Home",Id:"Header"},
        {label:"About",Id:"About"},
        {label:"Projet",Id:"Projet"},
        {label:"Portfolio",Id:"Portfolio"},
       
    ];
        
  return (
      <AppBar position='fixed' className={classes.navbar}
      style={{ backgroundColor: Theme.colors.base1 }}>
        <Toolbar className={classes.Toolbar}>
          
          <Typography variant="h5" component="h6">
            {"My Portfolio"}
          </Typography>
          
          <Box sx={{ display: { sm: 'none',xs:'none',md:'block' }}}>
                    <Box>
                        {
                            navlinks.map((item, index) =>
                                <Button key={index} className={classes.navlinks}onClick={() => document.getElementById(item.Id).scrollIntoView()}>{item.label}</Button>
                            )}
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton color='inherit'>
                            <MenuRoundedIcon/>
                    </IconButton>
                </Box>


            </Toolbar>
        </AppBar>
    );
}


    