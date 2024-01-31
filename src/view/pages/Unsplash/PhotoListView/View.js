import React from 'react';

import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
} from '@mui/material';

import { useQuery } from "react-query";
import { loadCharacters } from "../../../data/rickymorty/api/api";
import Header from './Header';
import Results from './Results';
import Page from '../../../../components/Page';

function CharacterListView () {
  const classes = useStyles();


  const { data: charactersData = { results: [] } } = useQuery(
    "results",
    loadCharacters
  );

  const results = charactersData.results;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Page className={classes.root} title="Auction List">
      <Container maxWidth={false}>
        <Header />
      
 
    {data && (
          <Box mt={3}>
            <Results results={results} />
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

export default CharacterListView;
