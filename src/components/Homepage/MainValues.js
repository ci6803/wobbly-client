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
                <Diversity1RoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  The best luxury hotels
                </Typography>
                <Typography variant="h5">
                  {
                    "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                  }

                  {
                    ", go for a mini-vacation just a few subway stops away from your home."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <FestivalRoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  New experiences
                </Typography>
                <Typography variant="h5">
                  {
                    "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                  }

                  {"your Sundays will not be alike."}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <AttractionsRoundedIcon sx={{ fontSize: 55 }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Exclusive rates
                </Typography>
                <Typography variant="h5">
                  {
                    "By registering, you will access specially negotiated rates "
                  }
                  {"that you will not find anywhere else."}
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
