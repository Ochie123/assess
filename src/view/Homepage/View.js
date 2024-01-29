import React from "react"
import {  Typography, useMediaQuery } from "@mui/material"
import Card from "@mui/material/Card";
import Page from '../../components/Page';

import Home from './Home';



const Main = () => {
  const mobileDevice = useMediaQuery("(max-width:650px)")


  return (
    <>
    <Page title="Home - Assess">
    
    {mobileDevice ? (
 
    < >
          <Typography variant={mobileDevice ? 'h4' : 'h2'}>
   
  
        <Home/>
        </Typography>
    </>
  
    ) : (
        <>
       
     
        <Home/>

   
    
        </>
)}

    </Page>

    </>
  )
}

export default Main
