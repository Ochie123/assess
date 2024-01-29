// @mui material components
import PropTypes from "prop-types";
import React from 'react';

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { Box } from "@mui/joy";
import {Typography} from "@mui/joy";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footers({company, links, socials, light}){
   const { href, name } = company;

    const year = new Date().getFullYear();

    const renderLinks = links.map((link) => (
        <Typography
          key={link.name}
         
         
          variant="body2"
          color={ "white"}
          fontWeight="regular"
        >
          {link.name}
        </Typography>
      ));
    
      const renderSocials = socials.map((social) => (
        <Typography

        variant="body2"
        color={light ? "white" : "secondary"}
        fontWeight="regular"
      >
        {social.icon}
        </Typography>
      ));
    
    return (
        <Box component="footer" py={6}>
          <Grid container justifyContent="center">
            <Grid item xs={10} lg={8}>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                {renderLinks}
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
              {renderSocials}
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
              <Typography variant="body2" color={ "white"}>
                Copyright &copy; {year} by{" "}
                <Typography
                 
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color={ "white"}
                >
                 Assess
                </Typography>
                
              </Typography>
            </Grid>
          </Grid>
        </Box>
      );
}

Footers.defaultProps = {
    company: {  name: "Assess" },
    links: [
      {  name: "Company" },
      { name: "About Me" },
      { name: "Products" },

    ],
    socials: [
      { icon: <FacebookIcon fontSize="small" />,  
  },
      {
        icon: <TwitterIcon fontSize="small" />,
    
      },
      {
        icon: <InstagramIcon fontSize="small" />,
        
      },

    ],
    light: true,
  };
  
 
Footers.propTypes = {
    company: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    light: PropTypes.bool,
  };

export default Footers;