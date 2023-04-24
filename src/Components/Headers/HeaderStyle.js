import React from "react";
import { makeStyles } from "@mui/styles";
import { Height } from "@mui/icons-material";
import { Theme } from "../Theme";
import image from "../../images/13.jpg";

 export const useStyles=makeStyles((theme) => ({
    HeaderWraper:{
        width:'100%',
        minHeight:'100vh',
        height:'auto',
        backgroundImage:`linear-gradient(to bottom right,rgba(0, 0, 0, 0.8), rgba(128, 128, 128, 0.8)),url(${image})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
    },
    HeaderContainer:{
        width:'80%',
        minHeight:'90vh',
        height:'auto',
        padding:'20px',
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'center',
        color:Theme.colors.base2
       
    },
    headerTitle:{
        fontSize:'3rem !important',
        margin:'8px 0 !important'
    },
    headerDesc:{
        fontSize:'1.2rem !important',

    },
    Navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2
    },
    Toolbar:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between'
    },

    
    navlinks:{
        color:Theme.colors.base2
    },

    
    decorator:{
        display:'flex',
        fontWeight:'bolder',
        fontFamily:'roboto',
        marginTop:'20px',
        position:'relative',
        textTransform:'capitalize',
        '&:before':{
            width:'40px',
            height:'40px',
            backgroundColor:Theme.colors.primary,
            content:'""',
            borderRadius:'70%',
        }
    },
    decoratorText:{
        
        position:'absolute',
        lineHeight:'40px',
        left:'20px'
    },
    arrow:{
        position:'absolute',
        lineHeight:'52px',
        left:'90px',
        animationName:'upDown',
        animationDuration:'0.8s',
        animationIterationCount:'infinite',
    },

    
    '@global':{
        '@keyframes upDown':{
            "0%":{
                paddingTop:'0px',
                transform:"scale(1)"
            },
            "100%":{
                paddingTop:'10px',
                transform:"scale(1,2)"
            }
        }
    },
    "@media (max-width: 600px)":{
        headerTitle:{
            fontSize:'2rem !important',
        },
        headerDesc:{
            fontSize:'1rem !important',
    
        },
    }
}))