import React, { useState, useEffect } from 'react';
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
} from '@mui/material';

//import { useQuery } from "react-query";
//import { loadCharacters } from "../../../data/rickymorty/api/api";
import Header from './Header';
import Results from './Results';
import Page from '../../../../components/Page';

const AccessKey = 'frZ-Ilry71ODyHtsn6W_XKAa77h3ZUjVph_bydlEPnw';

const UnsplashPhotos = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos?page=1', {
          headers: {
            Authorization: `Client-ID ${AccessKey}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          console.error('Error fetching photos:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching photos:', error.message);
      }
    };

    fetchPhotos();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Page className={classes.root} title="Photo List">
      <Container maxWidth={false}>
        <Header />
      
 
    {photos && (
          <Box mt={3}>
            <Results results={photos} />
          </Box>
        )}
   
      <Backdrop
          className=""
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
   
    
       
      </Container>
    </Page>
  );
};


const useStyles = (theme) =>  ({
  root: {},

})

export default UnsplashPhotos;
