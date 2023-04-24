import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import { bodyStyles } from './Style'
import image from '../../images/6.png'
import image2 from '../../images/7.png'
import {  RenderSecionHeading } from '../Partager/Public';

export const Portfolio = () => {
    const classes = bodyStyles();
    const portfolioData=[
        {url:image,title:'#bootstap4',link:"https://www.coursera.org/account/accomplishments/certificate/ZTNSNQ93S3R8"},
        {url:image,title:'#nodejs',link:"https://www.coursera.org/account/accomplishments/certificate/6KH854WJFWDS"},
        {url:image,title:'#React',link:"https://www.coursera.org/account/accomplishments/certificate/QZW8ABHLMETE"},
        {url:image,title:'#DevOps',link:"https://www.coursera.org/account/accomplishments/certificate/TLXLFZSPB4HR"},
        {url:image2,title:'#Entrepreneuriat',link:"https://www.linkpicture.com/q/honoris-entrep.png"},
        {url:image2,title:'#Social skills',link:"https://www.linkpicture.com/q/Honoris-social-skills.png"},
       
    ]
    
     
      
    return (
        <Box className={classes.sectionDark} id='Portfolio'>
           
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Grid item xs={12} sm={8}>
                    {RenderSecionHeading({
                        smallText: 'Portfolio',
                        heading: "Mes Certificats et Formations",
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
                            <Button variant='contained' onClick={() => window.open(item.link)}>Check</Button>
                        </Box>
                    </Box>
                </Grid>
                )}
            </Grid>
            </Container>

        </Box>
    )
}