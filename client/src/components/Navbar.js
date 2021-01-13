import {
  IconSpotify,
  IconGithub,
  IconArtist,
  IconUser,
  IconTrack,
  IconGenre,
  IconLogout,
} from "images";
import { withRouter, Link } from "react-router-dom";
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
  color: #9b9b9b;
  margin-bottom: 2em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
  }

  svg {
    width: 40px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const MenuItem = styled.li`
  ${mixins.flexColumnCenter}
  color: ${theme.color.lightGray};
  transition: all 0.2s;
  cursor: pointer;
  padding: 1em 1em;

  a {
    color: ${theme.color.lightGray};
    transition: all 0.2s;
    text-decoration: none;
  }

  &:hover {
    color: ${theme.color.white};
    background-color: #212121;

    a {
      color: ${theme.color.white};
    }
  }

  svg {
    width: 25px;
  }
`;

function Navbar() {
  return (
    <NavbarStyle>
      <SpotifyIcon>
        <IconSpotify />
      </SpotifyIcon>
      <Menu>
        <MenuItem>
          <IconUser />
          <Link to="/">Profile</Link>
        </MenuItem>

        <MenuItem>
          <IconTrack />
          <Link to="/top-tracks">Top Tracks</Link>
        </MenuItem>

        <MenuItem>
          <IconArtist />
          <Link to="/top-artists">Top Artists</Link>
        </MenuItem>

        <MenuItem>
          <IconGenre />
          <Link to="/top-genres">Top Genres</Link>
        </MenuItem>

        <MenuItem>
          <IconLogout />
          <Link to="/">Sign Out</Link>
        </MenuItem>

        {/* <button onClick={() => logout()}>Sign Out</button> */}
      </Menu>
      <GithubIcon>
        <IconGithub />
      </GithubIcon>
    </NavbarStyle>
  );
}

export default withRouter(Navbar);
