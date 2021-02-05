import React from "react";
import { Link } from "react-router-dom";

import Logout from "components/Logout";
import { NoUserIcon } from "assets/icons";

import styled from "styled-components";
import { Section, Label, Image } from "styles";
import { mixins, theme } from "styles";

const { color, fontSize } = theme;

const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
`;

const Avatar = styled(Image)`
  width: 150px;
  height: 150px;
`;

const UnknownProfile = styled.div`
  ${mixins.flexCenter}
  border-radius: 50%;
  background: ${color.lightSlateGray};
  width: 200px;
  height: 200px;

  svg {
    width: 100px;
    height: 100px;
    color: ${color.lightGray};
  }
`;

const Overview = styled.div`
  ${mixins.flexRow}
`;

const OverviewItem = styled.div`
  ${mixins.flexColumn}
  align-items: center;
`;

const Stat = styled.p`
  color: ${color.green};
  font-size: ${fontSize.lg};
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

  const avatar = data.user.images[0] ? data.user.images[0].url : null;
  const name = data.user.display_name;

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
      <Overview>
        <OverviewItem>
          <Stat>{followers}</Stat>
          <Label>FOLLOWERS</Label>
        </OverviewItem>
        <OverviewItem style={{ margin: "0 2em" }}>
          <Stat>{following}</Stat>
          <Label>FOLLOWING</Label>
        </OverviewItem>
        <OverviewItem>
          <Stat>{playlists}</Stat>
          <PlaylistsLink to="/playlists">
            <Label>PLAYLISTS</Label>
          </PlaylistsLink>
        </OverviewItem>
      </Overview>
      <Logout />
    </Section>
  );
}

export default User;
