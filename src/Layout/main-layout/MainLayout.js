import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Divider, Box } from '@mui/material';

import NavigationBar from './NavigationBar'

import Footers from './Footers';

//import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>
        <Box component="section" py={{ xs: 3, md: 12 }}>
        <NavigationBar/>

      
        <div className="true">{children}
        <Analytics />
        </div>
        <Divider/>
            
        <Footers/>
      
        </Box>
        </>
    )
}

export default MainLayout;