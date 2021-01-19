import React from "react";
import styled from "styled-components";
import { mixins, theme } from "styles";

// Styled Components
import { Section } from "styles";

// Icons
import { UserIcon } from "icons";

const UnknownProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 2px #fff;
  width: 200px;
  height: 200px;

  svg {
    width: 85px;
    color: #fff;
  }
`;

const ProfileStats = styled.div`
  ${mixins.flexRow}
  ${mixins.flexCenter}
  margin-top: 2em;
`;

const Stats = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  padding: 0 2em;
`;

const Stat = styled.h3`
  color: ${theme.color.green};
`;

function User(props) {
  const { avatar, name, followers, following, playlists } = props;

  return (
    <Section>
      {avatar ? (
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "1em",
          }}
        />
      ) : (
        <UnknownProfile>
          <UserIcon />
        </UnknownProfile>
      )}
      <h2 style={{ fontSize: "60px" }}>{name}</h2>
      <ProfileStats>
        <Stats>
          <Stat>{followers}</Stat>
          <p>FOLLOWERS</p>
        </Stats>
        <Stats>
          <Stat>{following}</Stat>
          <p>FOLLOWING</p>
        </Stats>
        <Stats>
          <Stat>{playlists}</Stat>
          <p>PLAYLISTS</p>
        </Stats>
      </ProfileStats>
    </Section>
  );
}

export default User;
