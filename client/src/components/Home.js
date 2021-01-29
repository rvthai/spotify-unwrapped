import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { media } from "styles";

// Components
import Navbar from "./Navbar";
import Profile from "pages/Profile";
import TopTracks from "pages/TopTracks";
import TopArtists from "pages/TopArtists";
import TopGenres from "pages/TopGenres";
import Playlists from "pages/Playlists";

const Content = styled.div`
  min-height: 100vh;
  margin-left: 200px;

  ${media.tablet`
    margin-left: 0;
  `}
`;

const Home = () => (
  <Router>
    <Navbar />
    <Content>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/top-tracks" component={TopTracks} />
        <Route exact path="/top-artists" component={TopArtists} />
        <Route exact path="/top-genres" component={TopGenres} />
        <Route exact path="/playlists" component={Playlists} />
      </Switch>
    </Content>
  </Router>
);

export default Home;
