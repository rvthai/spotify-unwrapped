import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Profile from "../pages/Profile";
import TopTracks from "../pages/TopTracks";
import TopArtists from "../pages/TopArtists";
import TopGenres from "../pages/TopGenres";

const Home = () => (
  <Router>
    <div style={{ paddingLeft: "100px" }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/top-tracks" component={TopTracks} />
        <Route exact path="/top-artists" component={TopArtists} />
        <Route exact path="/top-genres" component={TopGenres} />
      </Switch>{" "}
    </div>
  </Router>
);

export default Home;
