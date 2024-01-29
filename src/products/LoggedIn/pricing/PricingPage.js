import React from 'react';

import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Card,
  Typography,

} from '@mui/material';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';


import Page from '../../../components/Page';

const PricingPage = () => {
 

  return (
    <Page title="Pricing - Moneysites">
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundColor: "green", // Set the background color to black
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Our Pricing {" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Different needs for everyone.
              
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
      <Box mt="160px">
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" color="green">
          What is a Credit?
        </Typography>
        <Box mt={3}>
          <Typography align="center" variant="subtitle1" color="textSecondary">
            A single API call is 1 credit.
          </Typography>
        </Box>
        <br></br>
      </Container>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item md={4} xs={12}>
              <Paper>
              <Container 
                sx={{
                backgroundColor: "white", // Set the background color to black
                placeItems: "center",
              }}
              >
                <img
                  alt="Product"
                  className=""
                  src="images/products/product_standard.svg"
                />
                <Typography
                  component="h4"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Free
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h4"
                    color="textPrimary"
                  >
                    $ 0
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="textSecondary"
                  >
                    /month
                  </Typography>
                </div>
                <Typography variant="overline" color="textSecondary">
                  Max 1 user
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Typography variant="body2" color="textPrimary" justifyContent="center">
                  600 credits
                  <br />
                  Analytics dashboard
                  <br />
                  Email alerts
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Grid container item justifyContent="center" xs={12} mt={0} mb={2}>
                  <MKButton type="submit" fullWidth variant="gradient" color="info" disabled>
                    Choose
                  </MKButton>
                </Grid>
                </Container>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper
           
                elevation={10}
              >
                 <Container
                  sx={{
                    backgroundColor: "green", // Set the background color to black
                    placeItems: "center",
                }}      
                 >
                <img
                  alt="Product"
                
                  src="images/products/product_premium--outlined.svg"
                />
                <MKTypography
                  variant="h4"
                  gutterBottom
                 
                  color="white"
                >
                  Premium
                </MKTypography>
                <div>
                  <MKTypography
                    component="span"
                    display="inline"
                    variant="h4"
                    color="white"
                  >
                    $15
                  </MKTypography>
                  <MKTypography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="white"
                  >
                    /month
                  </MKTypography>
                </div>
                <MKTypography variant="h6" color="white">
                  Max 3 users
                </MKTypography>
                <Box my={2}>
                  <Divider />
                </Box>
                <MKTypography variant="body2" color="white">
                  6000 credits
                  <br />
                  Analytics dashboard
                  <br />
                  Email alerts
                </MKTypography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Grid container item justifyContent="center" xs={12} mt={0} mb={2}>
                  <MKButton type="submit" fullWidth variant="gradient" color="info">
                    Choose
                  </MKButton>
                </Grid>
                </Container>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper>
              <Container>
                <img
                  alt="Product"
                  src="images/products/product_extended.svg"
                />
                <Typography
                  component="h4"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                  Extended
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h4"
                    color="textPrimary"
                  >
                    $ 50
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="textSecondary"
                  >
                    /month
                  </Typography>
                </div>
                <Typography variant="overline" color="textSecondary">
                  Unlimited
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Typography variant="body2" color="textPrimary" justifyContent="center">
                  30000 credits
                  <br />
                  Unlimited 24/7 support
                  <br />
                  Personalised Page
      
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Grid container item justifyContent="center" xs={12} mt={0} mb={2}>
                  <MKButton type="submit" fullWidth variant="gradient" color="info">
                    Choose
                  </MKButton>
                </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </Card>
    </Page>
  );
};

export default PricingPage;
