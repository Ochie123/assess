// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ApiIcon from '@mui/icons-material/Api';
import { Box } from "@mui/material";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function Home() {
  return (
    <Box component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="h2" color="green" my={3}>
            Developer Relations Assessment
            </Typography>
            <Typography variant="body2" color="text" mb={2}>
            A client application that documents the Unsplash APIs and Rick & Morty API.
            </Typography>
            <Typography>
            <Stack spacing={2} direction="row">
              <Box display="flex" alignItems="center" p={2}>
                <Box>
                <ColorButton variant="contained"><ApiIcon/>Unsplash api <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> </ColorButton>  
                </Box>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box>
                <ColorButton variant="contained"><ApiIcon/>Rick & Morty <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> </ColorButton>  
                </Box>
              </Box>
  
            </Stack>
              
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;