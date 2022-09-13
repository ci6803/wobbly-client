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
