import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

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

function Footer() {
  <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: "#112D4E", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom></Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      ></Typography>
      <Copyright />
    </Box>
  </ThemeProvider>;
}
export default Footer;
