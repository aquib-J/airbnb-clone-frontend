import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ExploreNearby2 from "./Components/HomePage/ExploreNearby2";
import Hero from "./Components/HomePage/Hero";
import LisitngsPage from "./Components/ListingsFromSearch/LisitngsPage";
import MainListingShowCase from "./Components/MainListingShowCase/MainListingShowCase";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <Header />
      {/* <LisitngsPage /> */}
      {/* <Hero />
      <ExploreNearby2 /> */}
      <MainListingShowCase />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
