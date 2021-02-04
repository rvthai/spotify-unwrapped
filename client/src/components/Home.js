import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Components
import Navbar from "components/Navbar";
import Profile from "pages/Profile";
import TopTracks from "pages/TopTracks";
import TopArtists from "pages/TopArtists";
import TopGenres from "pages/TopGenres";
import Playlists from "pages/Playlists";
import Artist from "pages/Artist";
import PageNotFound from "pages/PageNotFound";

// Styles
import { media } from "styles";

const Content = styled.div`
  min-height: 100vh;
  margin-left: 100px;

  ${media.tablet`
    margin-left: 0;
    padding-bottom: 55px;
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
        <Route exact path="/top-artists/:id" component={Artist} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Content>
  </Router>
);

export default Home;
