import * as React from "react";
import Button from "../Button";
import Typography from "../Typography";
import MainLayout from "./MainLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const backgroundImage =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

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

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          color="secondary"
          align="center"
          variant="h2"
          marked="center"
        >
          Wobbly
        </Typography>
        <Typography
          color="secondary"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
          a platform for festival lovers
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="/signup"
          sx={{ minWidth: 200 }}
        >
          Signup
        </Button>
        <Typography variant="body2" color="secondary" sx={{ mt: 2 }}>
          It's time to get together
        </Typography>
      </MainLayout>
    </ThemeProvider>
  );
}
