import SpotifyLogo from "../images/spotify-logo.png";
import { withRouter, Link } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";

const sidebar = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100px",
  height: "100vh",
  background: "#121212",
  display: "flex",
  flexDirection: "column",
};

function Navbar(props) {
  return (
    <div style={sidebar}>
      <img src={SpotifyLogo} alt="spotify-logo" width="50px" />
      <Link to="/">Profile</Link>
      <Link to="/top-tracks">Top Tracks</Link>
      <Link to="/top-artists">Top Artists</Link>
      <Link to="/top-genres">Top Genres</Link>
      <Link to="/sign-out">Sign Out</Link>
    </div>
  );
}

export default withRouter(Navbar);