import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { bodyStyles } from "./Style";
import { Link } from "react-scroll";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Contact() {
    const classes = bodyStyles();
    const date = new Date();
    return (
        <Box className={classes.footerContainer}>
          <IconButton
            color='inherit'
            className={classes.arrowTop}
            component={Link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            to='header'>
          </IconButton>
          <Typography variant='body1' align='center'>
            Aya Kharbouch  , All Right Reserved &#169; {date.getFullYear()}
          </Typography>
        </Box>
      );
}