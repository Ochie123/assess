import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Divider } from '@mui/material';

import NavigationBar from './NavigationBar'

import Footers from './Footers';

//import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>
        <NavigationBar/>

      
        <div className="true">{children}
        <Analytics />
        </div>
        <Divider/>
            
        <Footers/>
      
        
        </>
    )
}

export default MainLayout;