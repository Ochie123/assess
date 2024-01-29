import React, { lazy, Suspense } from 'react';

import { createGlobalStyle } from "styled-components";

import 'react-quill/dist/quill.snow.css';
import { SnackbarProvider } from 'notistack';
import Helmet from 'react-helmet';
import { LinearProgress } from '@mui/material';
import "../src/view/Detail/scss/astro-ecommerce.scss"
import "../src/Layout/main-layout/Layout.scss"

import MainLayout from '../src/Layout/main-layout/MainLayout'


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 2;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Homepage = lazy(() => import('./view/Homepage'));
const About = lazy(() => import('./view/pages/About'));
const NotFoundPage = lazy(() => import('./view/pages/NotFoundPage'));

function App() {
 

  return (
    <>      

      <GlobalStyle />
      <SnackbarProvider dense maxSnack={3}>

      <CssBaseline />
      <Router>
      <Helmet
          titleTemplate="%s - Assess"
          defaultTitle="Assess"
        >
          <meta name="description" content="Assess" />
        </Helmet> 
        <MainLayout>
        <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
        <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
    
        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    
        </Routes>
        
        </Suspense>
        </MainLayout>
   
      </Router>

      </SnackbarProvider>
 
      </>
  );
}

export default App;
