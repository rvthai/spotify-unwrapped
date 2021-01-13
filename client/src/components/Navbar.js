import {
  IconSpotify,
  IconGithub,
  IconArtist,
  IconUser,
  IconTrack,
  IconGenre,
  IconLogout,
} from "images";
import { withRouter, Link, NavLink, useLocation } from "react-router-dom";
import { logout } from "../api";
import { NavbarStyle, Icon, theme, mixins } from "styles";
import styled from "styled-components";

const SpotifyIcon = styled(Icon)`
  color: #1db954;
  margin-top: 2em;

  svg {
    width: 60px;
  }
`;

const GithubIcon = styled(Icon)`
  color: ${theme.color.lightGray3};
  margin-bottom: 2em;
  transition: all 0.3s;

  &:hover {
    color: ${theme.color.white};
  }

  svg {
    width: 40px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const MenuItem = styled(NavLink)`
  ${mixins.flexColumnCenter}
  color: ${theme.color.lightGray3};
  transition: all 0.2s;
  cursor: pointer;
  padding: 1.5em;
  text-decoration: none;
  border-left: 5px solid transparent;
  font-size: 12px;

  &:hover {
    color: ${theme.color.white};
    background-color: ${theme.color.gray};
  }

  svg {
    width: 20px;
    margin-bottom: 0.5em;
  }
`;

const activeClass = {
  backgroundColor: `${theme.color.gray}`,
  borderLeft: `solid 5px ${theme.color.green}`,
  color: `${theme.color.white}`,
};

function Navbar() {
  return (
    <NavbarStyle>
      <SpotifyIcon>
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
      </GithubIcon>
    </NavbarStyle>
  );
}

export default withRouter(Navbar);
