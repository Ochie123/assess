import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import AspectRatio from '@mui/joy/AspectRatio';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ListItemContent from '@mui/joy/ListItemContent';
import { Link } from "react-router-dom"

import Grid from "@mui/material/Grid";

const AccessKey = 'frZ-Ilry71ODyHtsn6W_XKAa77h3ZUjVph_bydlEPnw';

const UnsplashPhotos = () => {
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

  return (
    <div className="container mt-5">
    <Container>
      <div>
      <Grid container justifyContent="center">
  <h1>
    Categories
 </h1>
    </Grid>
        {photos.map((photo) => (
            
          <React.Fragment key={photo.id}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
              
                <AspectRatio
                  sx={{
                    flexBasis: 220,
                    borderRadius: 'md',
                    overflow: 'hidden',
                  }}
                >
                    <Link to={`/photos/${photo.id}`} key={photo.id}>
                  <img src={photo.urls.regular} alt={photo.description} />
                  </Link>
                </AspectRatio>
              
                <ListItemContent>
                  <Typography fontWeight="xl">
                  {photo.description && photo.description.length > 50
                    ? `${photo.description.substring(0, 50)}...`
                    : photo.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Photographer: {photo.user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Likes: {photo.likes}
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href={photo.user.links.html}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Photographer's Portfolio
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href={photo.links.html}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Unsplash
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href={photo.links.download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {photo !== photos[photos.length - 1] && <ListDivider />}
          </React.Fragment>
        
        ))}
      </div>
    </Container>
    </div>
  );
};

export default UnsplashPhotos;
