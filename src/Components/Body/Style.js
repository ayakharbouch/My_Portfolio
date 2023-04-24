import {makeStyles} from '@mui/styles'
import { Theme } from '../Theme'

export const bodyStyles= makeStyles((theme)=>({
    section:{
        backgroundColor:Theme.colors.base1,
        padding:'100px 8px !important',
        
    },
    divider:{
        display:'block',
        width:'80px',
        height:'4px',
        backgroundColor:Theme.colors.primary,
       
    },
    responsiveImg:{
        width:'100%',
        height:'auto',
        borderRadius:'50%',
    },
    responsiveImg2:{
        width:'100%',
        height:'auto',
        borderRadius:'8px',
    },
    footerContainer: {
        
        backgroundColor: Theme.colors.base1,
        color: Theme.colors.base2,
        position: "relative",
      },
    sectionHeadingContent:{
        padding:'12px',
        color:Theme.colors.base2
    },
    sectionHeading:{
        margin:'8px 0px !important'
    },
    sectionText:{
        // color:Theme.colors.base2
    },
    AvatarCont:{
        display:'flex',
        flexFlow:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        color:Theme.colors.base2,
        backgroundColor:Theme.colors.primary,
    },
    MediaText:{
        color:Theme.colors.base2
    },


    

    sectionDark:{
        backgroundColor:Theme.colors.primary1,
        padding:'100px 8px !important',
    },

    imageContainer:{
        position:'relative',
        '&:hover $imageOverlay':{
            opacity:1
        }
    },
    imageOverlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.base1,
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'center',
        alignItems:'center',
        opacity:0,
        transition:'0.7s'
    },

    overlayTitle:{
        fontSize:'2rem !important'
    },

    "@media (max-width: 600px)":{
        overlayTitle:{
            fontSize:'1rem !important'
        },
    }



}))