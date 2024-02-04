import React, { lazy, Suspense } from 'react';

import { createGlobalStyle } from "styled-components";

import 'react-quill/dist/quill.snow.css';
import { SnackbarProvider } from 'notistack';
import Helmet from 'react-helmet';
import { LinearProgress } from '@mui/material';
import "../src/view/Detail/scss/astro-ecommerce.scss"
import "../src/Layout/main-layout/Layout.scss"
import DataProvider from "./data";
import MainLayout from '../src/Layout/main-layout/MainLayout'


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
const Category = lazy(() => import('../src/view/pages/RickyMorty/Category'));
const Characters = lazy(() => import ('../src/view/pages/RickyMorty/Characters'));
const Episodes= lazy(() => import ('../src/view/pages/RickyMorty/Episodes'));
const Locations = lazy(() => import ('../src/view/pages/RickyMorty/Locations'));
const Images = lazy(() => import('../src/view/pages/Unsplash/PhotoListView'));
const CharacterDetailPage = lazy(() => import ('../src/view/Detail/CharacterDetailPage'));
const PhotoDetailPage = lazy(() => import ('../src/view/Detail/PhotoDetailPage'));
const About = lazy(() => import('./view/pages/About'));
const NotFoundPage = lazy(() => import('./view/pages/NotFoundPage'));

function App() {
 

  return (
    <DataProvider>

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
        <Route path="ricky-morty/" element={<Category />} />
        <Route path="characters/" element={<Characters />} />
        <Route path="episodes/" element={<Episodes />} />
        <Route path="locations/" element={<Locations />} />
        <Route path="characters/:id" element ={<CharacterDetailPage/>}/>
        <Route path="unsplash/" element={<Images />} />
        <Route path="photos/:id" element={<PhotoDetailPage/>} />
        <Route path="about/" element={<About />} />
    
        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    
        </Routes>
        
        </Suspense>
        </MainLayout>
   
      </Router>

      </SnackbarProvider>
 
      </DataProvider>
  );
}

export default App;
