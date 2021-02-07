import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section, Label, Image } from "styles";
import { theme, mixins } from "styles";
import { NoUserIcon } from "assets/icons";

// Components
import Logout from "components/Logout";

const { color, fontSize, fontWeight } = theme;

const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 1em;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled(Image)`
  width: 150px;
  height: 150px;
`;

const UnknownProfile = styled.div`
  ${mixins.flexCenter}
  background: ${color.gray};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1em;

  svg {
    color: ${color.lightGray};
    width: 75px;
    height: 75px;
  }
`;

const StatsWrapper = styled.div`
  ${mixins.flexCenter}
  margin: 1em 0;
  width: 100%;
`;

const Stats = styled.div`
  ${mixins.flexRow}
`;

const Stat = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexAlignCenter}
`;

const Count = styled.p`
  color: ${color.green};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
  line-height: 1.5em;
`;

const PlaylistsLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${color.lightGray};
  }
`;

function User(props) {
  const { data } = props;

  const name = data.user.display_name;
  const avatar = data.user.images[0] ? data.user.images[0].url : null;
  const followers = data.user.followers.total;
  const following = data.following.artists.total;
  const playlists = data.playlists.total;

  return (
    <Section>
      {avatar ? (
        <AvatarWrapper>
          <Avatar src={avatar} alt="avatar" />
        </AvatarWrapper>
      ) : (
        <UnknownProfile>
          <NoUserIcon />
        </UnknownProfile>
      )}
      <h2>{name}</h2>

      <StatsWrapper>
        <Stats>
          <Stat>
            <Count>{followers}</Count>
            <Label>FOLLOWERS</Label>
          </Stat>
          <Stat style={{ margin: "0 2em" }}>
            <Count>{following}</Count>
            <Label>FOLLOWING</Label>
          </Stat>
          <Stat>
            <Count>{playlists}</Count>
            <PlaylistsLink to="/playlists">
              <Label>PLAYLISTS</Label>
            </PlaylistsLink>
          </Stat>
        </Stats>
      </StatsWrapper>

      <Logout />
    </Section>
  );
}

export default User;
