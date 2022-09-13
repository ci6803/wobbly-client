// import React from "react";
// import "../App.css";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// export default function HomePage() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {/* <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Wobbly
//           </Typography>
//         </Toolbar>
//       </AppBar> */}
//       <main>
//         <Box
//           sx={{
//             bgcolor: "background.paper",
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <div className="home-splash">
//             <Container maxWidth="sm">
//               <Typography
//                 component="h1"
//                 variant="h2"
//                 align="center"
//                 color="text.primary"
//                 gutterBottom
//               >
//                 Wobbly
//               </Typography>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 color="text.secondary"
//                 paragraph
//               >
//                 a platform for festival lovers
//               </Typography>
//               <Stack
//                 sx={{ pt: 4 }}
//                 direction="row"
//                 spacing={2}
//                 justifyContent="center"
//               >
//                 <Button variant="contained">See festivals</Button>
//                 <Button variant="outlined">Create a festivals</Button>
//               </Stack>
//             </Container>
//           </div>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md" className="card">
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: "56.25%",
//                     }}
//                     image="https://source"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe
//                       the content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }

import * as React from "react";
// import ProductCategories from "./modules/views/ProductCategories";
// import ProductSmokingHero from "./modules/views/ProductSmokingHero";
// import AppFooter from "./modules/views/AppFooter";
import Main from "../components/Homepage/Main.jsx";
import MainValues from "../components/Homepage/MainValues";
// import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import EmailSection from "../components/Homepage/EmailSection";
// import AppAppBar from "./modules/views/AppAppBar";
// import withRoot from "./modules/withRoot";

function HomePage() {
  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
      <Main />
      <MainValues />
      {/* <ProductCategories />
      <ProductHowItWorks /> */}
      <EmailSection />
      {/* <ProductSmokingHero />
      <AppFooter /> */}
    </React.Fragment>
  );
}

export default HomePage;
