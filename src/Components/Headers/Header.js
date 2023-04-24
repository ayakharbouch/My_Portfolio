import { Box, Typography } from "@mui/material";
import { useStyles } from "./HeaderStyle";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import { Decorator } from '../Partager/Public';
import { ArrowDownwardRounded } from '@mui/icons-material';
 


export default function Header (){
    const classes = useStyles()
    const homeRef = useRef(null);
    return (
        <section id="Header" ref={homeRef} >
        <Box className={classes.HeaderWraper}>
            <Navbar/>
        <Box className={classes.HeaderContainer}>
        <Typography variant='h3' component='h4' className={classes.headerTitle}>Aya Kharbouch, Etudiante a l'emsi en l'ingenieurie informatique et reseaux| </Typography>
        <Typography variant='h3' component='h4' className={classes.headerDesc}>Voici Mon Portfolio, 
        </Typography>
        {Decorator({label:'Découvrez mon Portfolio',widthIcon:true,Icon:<ArrowDownwardRounded/>})}
    </Box>
</Box>
</section>
    )
}