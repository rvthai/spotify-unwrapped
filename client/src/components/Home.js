// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Profile from "../pages/Profile";
import TopTracks from "../pages/TopTracks";
import TopArtists from "../pages/TopArtists";
import TopGenres from "../pages/TopGenres";
import SignOut from "../pages/SignOut";

function Home(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/top-tracks" component={TopTracks} />
        <Route exact path="/top-artists" component={TopArtists} />
        <Route exact path="/top-genres" component={TopGenres} />
        <Route exact path="/sign-out" component={SignOut} />
      </Switch>
    </Router>
  );
}

export default Home;
