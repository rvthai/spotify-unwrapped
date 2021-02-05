import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getFollowStatus, followArtist, unfollowArtist } from "utils";
import styled from "styled-components";
import { Main, Section, Image, Label, Button } from "styles";
import { theme, mixins, media } from "styles";
import { BackIcon } from "assets/icons";

// Components
import Loader from "components/Loader";

const { color, fontSize, transition } = theme;

const BackIconWrapper = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  color: ${color.lightGray};
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 115px;
  transition: ${transition};

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    color: ${color.white};
  }

  ${media.tablet`
    left: 15px;
  `}
`;

const CenteredSection = styled(Section)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;

  ${media.tablet`
    width: 250px;
    height: 250px;
  `}

  ${media.phone`
    width: 150px;
    height: 150px
  `}
`;
const ArtistImage = styled(Image)`
  width: 300px;
  height: 300px;
  transition: ${transition};

  ${media.tablet`
    width: 250px;
    height: 250px;
  `}

  ${media.phone`
    width: 150px;
    height: 150px
  `}
`;

const Chips = styled.div`
  ${mixins.flexRow}
  ${mixins.flexWrap}
  ${mixins.flexJustifyCenter}
  margin: 2em 0;
  width: 500px;

  ${media.tablet`
    width: 300px;
  `}

  ${media.phone`
    width: 250px;
  `}
`;

const Chip = styled.div`
  color: ${color.lightGray};
  background: ${color.gray};
  font-size: ${fontSize.sm};
  border-radius: 500px;
  padding: 0.5em 2em;
  margin: 0.5em;
  white-space: nowrap;
  ${mixins.ellipsis};
  max-width: 500px;

  ${media.tablet`
    max-width: 300px;
  `}

  ${media.phone`
    max-width: 250px;
  `}
`;

const FollowButton = styled(Button)`
  background: transparent;
  border: 1px solid ${color.white};
  cursor: pointer;
  width: 165px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: ${color.lightGray};
    transform: scale(1);
  }

  ${(props) =>
    props.following &&
    `
    color: ${color.green};
  `}
`;

function Artist(props) {
  const { id, name, genres, image, followers } = props.location.state;
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getFollowStatus(id);
      setFollowing(response.data[0]);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleBackClick = () => history.goBack();

  const handleFollowClick = async () => {
    if (!following) {
      try {
        await followArtist(id);
        setFollowing(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await unfollowArtist(id);
        setFollowing(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) return <Loader color={color.lightGray} isPage={true} />;

  return (
    <Main>
      <BackIconWrapper onClick={handleBackClick}>
        <BackIcon />
      </BackIconWrapper>

      <CenteredSection>
        <ImageWrapper>
          <ArtistImage src={image} alt="artist-profile-pic" />
        </ImageWrapper>

        <h1>{name}</h1>

        <Label>{followers.toLocaleString()} FOLLOWERS</Label>

        <Chips>
          {genres.map((genre, index) => (
            <Chip key={index}>{genre}</Chip>
          ))}
        </Chips>

        <FollowButton onClick={handleFollowClick} following={following}>
          {following ? "FOLLOWING" : "FOLLOW"}
        </FollowButton>
      </CenteredSection>
    </Main>
  );
}

export default Artist;
