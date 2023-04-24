import React, { useRef } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import { bodyStyles } from './Style'
import image from '../../images/12.png'


import {  RenderSecionHeading } from '../Partager/Public';





export const Projet = () => {
    const classes = bodyStyles();
    const projetRef = useRef(null);
    const portfolioData=[
        {url:image,title:'#Application mobile',link:"https://github.com/ayakharbouch/PokedexMain"},
        {url:image,title:'#Tic Tac Toe',link:"https://github.com/ayakharbouch/GameXO"},
        {url:image,title:'#Smart Home',link:"https://github.com/ayakharbouch/SmartHouse"},
        {url:image,title:'#StudentTalk',link:"https://github.com/ayakharbouch/StudentTalk/blob/main/README.md"},
        
       
    ]
    return (
        <section id="Projet" ref={projetRef} >
        <Box className={classes.section} id='Portfolio'>
           
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Grid item xs={12} sm={8}>
                    {RenderSecionHeading({
                        smallText: 'Portfolio',
                        heading: "Mes Projets",
                        alignCenter: true
                    })}
                </Grid>
            </Grid>
            
            <Container maxWidth='xl'>
            <Grid container spacing={2}>
                {portfolioData.map((item,i)=>
                    <Grid item xs={6} sm={6} lg={3} key={i}>
                    <Box className={classes.imageContainer}>
                        <img src={item.url} alt={item.title} className={classes.responsiveImg2}/>
                        <Box className={classes.imageOverlay}>
                            <Typography className={classes.overlayTitle}>{item.title}</Typography>
                            <Button variant='contained'onClick={() => window.open(item.link)}>Check</Button>
                        </Box>
                    </Box>
                </Grid>
                )}
            </Grid>
            </Container>

        </Box>
        </section>
    )
}