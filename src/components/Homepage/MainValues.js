import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import FestivalRoundedIcon from "@mui/icons-material/FestivalRounded";
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F72AF",
    },
    secondary: {
      main: "#DBE2EF",
    },
    info: {
      main: "#112D4E",
    },
    success: {
      main: "#F9F7F7",
    },
  },
});

function MainValues() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
      >
        <Container
          sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
        >
          <Box
            component="img"
            src="/static/themes/onepirate/productCurvyLines.png"
            alt="curvy lines"
            sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <FestivalRoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  New experiences
                </Typography>
                <Typography variant="h5">
                  {
                    "Personalised profile page, save your favourite festivals to remind you for upcoming events."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Diversity1RoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Live chat
                </Typography>
                <Typography variant="h5">
                  {
                    "Instantly connect with fellow festival lovers with video chat or text messages."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <AttractionsRoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  {" "}
                  Find festival buddies
                </Typography>
                <Typography variant="h5">
                  {
                    "Can't find anyone to join a festival together? You can expand your connection here to find festival buddies."
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MainValues;
