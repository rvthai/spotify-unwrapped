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
import { NavbarStyle, Icon } from "styles";
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

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RouterLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  width: 100%;

  a {
    text-decoration: none;
    color: #9b9b9b;
    transition: all 0.3s;
  }

  a:hover {
    color: #fff;
  }
`;

function Navbar() {
  return (
    <NavbarStyle>
      <SpotifyIcon>
        <IconSpotify />
      </SpotifyIcon>
      <Links>
        <RouterLink>
          <IconUser />
          <Link to="/">Profile</Link>
        </RouterLink>

        <RouterLink>
          <IconTrack />
          <Link to="/top-tracks">Top Tracks</Link>
        </RouterLink>

        <RouterLink>
          <IconArtist />
          <Link to="/top-artists">Top Artists</Link>
        </RouterLink>

        <RouterLink>
          <IconGenre />
          <Link to="/top-genres">Top Genres</Link>
        </RouterLink>

        <RouterLink>
          <IconLogout />
          <Link to="/">Sign Out</Link>
        </RouterLink>

        {/* <button onClick={() => logout()}>Sign Out</button> */}
      </Links>
      <GithubIcon>
        <IconGithub />
      </GithubIcon>
    </NavbarStyle>
  );
}

export default withRouter(Navbar);
