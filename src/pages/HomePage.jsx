import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAlljob from "../components/ViewAlljob";
const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAlljob />
    </React.Fragment>
  );
};

export default HomePage;
