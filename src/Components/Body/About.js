import { Box, Container, Grid } from '@mui/material'

import { CardMedia, RenderSecionHeading } from '../Partager/Public';
import { bodyStyles } from './Style'
import Image from '../../images/4.jpg';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppsIcon from '@mui/icons-material/Apps';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import React, { useRef } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';



export const  About = () => {
    const classes = bodyStyles();
    const aboutRef = useRef(null);
    const cardMediaData = [
        {
            title: 'Mon cursus de formation',
            description: "un parcours universitaire initié par l'effectuation d'un dut  d'ingénierie informatique durant 2 ans à l'ens  marrakech poursuivi d'une année de licence informatique à l'UPM afin d'actuellement intégrer un master d'ingénierie informatique et réseaux à l'emsi marrakech .",
            icon: <WebIcon />
        },
        {
            title: 'Mes Stages',
            description: "Stage 1ère année: ETSK en 2020 - stage d'observation.\nStage 2ème année: Mr Tech 2021 - création d'une application web avec Symfony 4.\nStage 3ème année: Hermes Quality 2022 - création d'une application web de gestion assurance avec Laravel.",
            icon: <ComputerIcon />
          },
          
        
          
    ]
    return (
        <section id="About" ref={aboutRef} >
        <Box className={classes.section}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} sx={{ display: { sm: 'none', xs: 'none', md: 'block' } }}>
                        <Box>
                            <img src={Image} alt="user profile" className={classes.responsiveImg} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        {RenderSecionHeading({ smallText: 'A propos', heading: "Aya kharbouch", description: "Etudiante en 4eme annee IIR/EMSI MARRAKECH" })}
                        
                        <Grid container>
                            {
                                cardMediaData.map((item, i) => <Grid item xs={12} sm={6} key={i}>{
                                    CardMedia({label:item.title,Icon:item.icon,description:item.description})
                                }
                                </Grid>
                                )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </section>
    )
}
