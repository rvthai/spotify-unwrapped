import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

// Icons
import {
  SpotifyIcon,
  GithubIcon,
  UserIcon,
  TrackIcon,
  ArtistIcon,
  GenreIcon,
  PlaylistsIcon,
} from "assets/icons";

// Styles
import { Nav } from "styles";
import { theme, mixins, media } from "styles";

const { color, transition } = theme;

const Logo = styled.div`
  border-radius: 50%;
  margin: 2em 0;
  transition: ${transition};
  cursor: pointer;

  svg {
    display: block;
  }

  ${media.tablet`
    display: none;
  `}
`;

const SpotifyLogo = styled(Logo)`
  color: ${color.green};
  width: 50px;

  &:hover {
    color: ${color.lightGreen};
  }
`;

const GithubLogo = styled(Logo)`
  color: ${color.gray};
  width: 30px;

  &:hover {
    color: ${color.white};
  }
`;

const Menu = styled.div`
  ${mixins.flexColumn}
  width: 100%;

  ${media.tablet`
    ${mixins.flexRow}
  `}
`;

const MenuItem = styled(NavLink)`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  color: ${color.lightGray};
  height: 75px;
  font-size: 11px;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: ${transition};
  cursor: pointer;

  &:hover {
    color: ${color.white};
    background: ${color.darkGray};
  }

  &.active {
    color: ${color.white};
    background: ${color.darkGray};
    border-color: ${color.lightGreen};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }

  ${media.tablet`
    flex: 1 1 0;
    height: 100%;
    max-height: 100%;
    padding: 1em 0;
    border-left: 0;
    border-top: 3px solid transparent;
  `}
`;

const Navbar = () => (
  <Nav>
    <a href="/">
      <SpotifyLogo>
        <SpotifyIcon />
      </SpotifyLogo>
    </a>

    <Menu>
      <MenuItem exact to="/">
        <UserIcon />
        Profile
      </MenuItem>
      <MenuItem exact to="/top-tracks">
        <TrackIcon />
        Top Tracks
      </MenuItem>
      <MenuItem to="/top-artists">
        <ArtistIcon />
        Top Artists
      </MenuItem>
      <MenuItem exact to="/top-genres">
        <GenreIcon />
        Top Genres
      </MenuItem>
    </Menu>

    <a href="https://github.com/rvthai">
      <GithubLogo>
        <GithubIcon />
      </GithubLogo>
    </a>
  </Nav>
);

export default withRouter(Navbar);
