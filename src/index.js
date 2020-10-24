import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListingsPage from "./Components/ListingsFromSearch/ListingsPage";
import MainListingShowCase from "./Components/MainListingShowCase/MainListingShowCase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./Components/HomePage/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <CSSReset />

        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/city/:cityName" component={ListingsPage}></Route>
          {/* <MainListingShowCase /> */}
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
