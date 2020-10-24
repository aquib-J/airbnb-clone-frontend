import React, { Component } from "react";
import ExploreNearby2 from "./ExploreNearby2";
import Hero from "./Hero";

export class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <ExploreNearby2 />
      </>
    );
  }
}

export default HomePage;
