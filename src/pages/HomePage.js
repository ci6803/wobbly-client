import * as React from "react";
import Main from "../components/Homepage/Main.jsx";
import MainValues from "../components/Homepage/MainValues";
import EmailSection from "../components/Homepage/EmailSection";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="right">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Wobbly
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function HomePage() {
  return (
    <React.Fragment>
      <Main />
      <MainValues />

      <EmailSection />

      <Box
        sx={{ bgcolor: "#112D4E", p: 6 }}
        component="footer"
        className="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}

export default HomePage;
