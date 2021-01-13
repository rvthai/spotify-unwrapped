import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme, mixins, media } from "styles";
//import { logout } from "../api";

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
  width: 60px;

  &:hover {
    color: ${theme.color.lightGreen};
  }
`;

const GithubLogo = styled(Logo)`
  color: ${theme.color.gray};
  width: 40px;

  &:hover {
    color: ${theme.color.white};
  }
`;

const Menu = styled.div`
  ${mixins.flexColumnCenter}
`;

const MenuItem = styled(NavLink)`
  ${mixins.flexColumnCenter}
  color: ${theme.color.lightGray};
  transition: ${theme.transition}
  cursor: pointer;
  padding: 1.5em;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: ${theme.color.white};
    background-color: ${theme.color.darkGray};
  }

  svg {
    width: 20px;
    margin-bottom: 0.5em;
  }

  ${media.widescreen`
    border-left: 5px solid transparent;
  `}

  ${media.tablet`
    border-bottom: 5px solid transparent;
  `}
`;

const activeStyle = {
  backgroundColor: `${theme.color.darkGray}`,
  borderColor: `${theme.color.green}`,
  color: `${theme.color.white}`,
};

function Navbar() {
  return (
    <Nav>
      <SpotifyLogo>
        <SpotifyIcon />
      </SpotifyLogo>

      <Menu>
        <MenuItem exact to="/" activeStyle={activeStyle}>
          Profile
        </MenuItem>
        <MenuItem exact to="/top-tracks" activeStyle={activeStyle}>
          Top Tracks
        </MenuItem>
      </Menu>

      <GithubLogo>
        <GithubIcon />
      </GithubLogo>
      {/* <SpotifyIcon>
        <IconSpotify />
      </SpotifyIcon>
      <Menu>
        <li>
          <MenuItem exact to="/" activeStyle={activeClass}>
            <IconUser />
            Profile
          </MenuItem>
        </li>
        <li>
          <MenuItem exact to="/top-tracks" activeStyle={activeClass}>
            <IconTrack />
            Top Tracks
          </MenuItem>
        </li>
        <li>
          <MenuItem exact to="/top-artists" activeStyle={activeClass}>
            <IconArtist />
            Top Artists
          </MenuItem>
        </li>
        <li>
          <MenuItem exact to="/top-genres" activeStyle={activeClass}>
            <IconGenre />
            Top Genres
          </MenuItem>
        </li>
        <li>
          <MenuItem exact to="/logout" activeStyle={activeClass}>
            <IconLogout />
            Sign Out
          </MenuItem>
        </li>
      </Menu>
      <GithubIcon as="a" href="https://github.com/rvthai/spotify-profile">
        <IconGithub />
      </GithubIcon> */}
    </Nav>
  );
}

export default withRouter(Navbar);
