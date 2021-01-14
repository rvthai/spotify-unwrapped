import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme, mixins, media } from "styles";
import { logout } from "../utils";

// Styled Components
import { Nav } from "styles";

// Icons
import {
  SpotifyIcon,
  GithubIcon,
  UserIcon,
  TrackIcon,
  ArtistIcon,
  GenreIcon,
  LogoutIcon,
} from "icons";

const Logo = styled.div`
  margin: 2em 0;
  cursor: pointer;
  transition: ${theme.transition};
  border-radius: 50%;

  svg {
    display: block;
  }

  ${media.tablet`
    display: none;
  `}
`;

const SpotifyLogo = styled(Logo)`
  color: ${theme.color.green};
  width: 50px;

  &:hover {
    color: ${theme.color.lightGreen};
  }
`;

const GithubLogo = styled(Logo)`
  color: ${theme.color.gray};
  width: 30px;

  &:hover {
    color: ${theme.color.white};
  }
`;

const Menu = styled.div`
  width: 100%;
  ${mixins.flexColumn}
  ${media.tablet`
    width: 100%;
    ${mixins.flexRow}
    ${mixins.flexSpaceBetween}
  `}
`;

const MenuItem = styled(NavLink)`
  max-height: 40px;
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  color: ${theme.color.lightGray};
  transition: ${theme.transition};
  cursor: pointer;
  padding: 1.25em;
  text-decoration: none;
  font-size: 11px;
  border-left: 5px solid transparent;

  &.active {
    border-color: ${theme.color.lightGreen};
    color: ${theme.color.white};
    background-color: ${theme.color.darkGray};
  }

  &:hover {
    color: ${theme.color.white};
    background-color: ${theme.color.darkGray};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 0.5em;
  }

  ${media.tablet`
    flex: 1 1 0;
    padding: 1em 0;
    max-height: 100%;
    border-top: 5px solid transparent;
    border-left: 0;
  `}
`;

const handleLogout = (e) => {
  e.preventDefault();
  console.log("ya");
  logout();
};

function Navbar() {
  return (
    <Nav>
      <SpotifyLogo>
        <SpotifyIcon />
      </SpotifyLogo>

      <Menu>
        <MenuItem exact to="/">
          <UserIcon />
          Profile
        </MenuItem>
        <MenuItem exact to="/top-tracks">
          <TrackIcon />
          Top Tracks
        </MenuItem>
        <MenuItem exact to="/top-artists">
          <ArtistIcon />
          Top Artists
        </MenuItem>
        <MenuItem exact to="/top-genres">
          <GenreIcon />
          Top Genres
        </MenuItem>
        <MenuItem exact to="/sign-out" onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>

      <GithubLogo>
        <GithubIcon />
      </GithubLogo>
    </Nav>
  );
}

export default withRouter(Navbar);
