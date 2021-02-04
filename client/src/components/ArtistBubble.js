import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Image } from "styles";
import { theme, mixins, media } from "styles";
import { InfoIcon, NoUserIcon } from "assets/icons";

const { color, transition } = theme;

const Container = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexAlignCenter}
`;

const Artist = styled(Link)`
  position: relative;
  border-radius: 50%;
  text-decoration: none;
  color: ${color.white};

  @media (hover: hover) {
    &:hover {
      img {
        opacity: 0.5;
      }

      svg {
        display: block;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  ${media.tablet`
    width: 150px;
    height: 150px;
  `}

  ${media.phone`
    width: 100px;
    height: 100px;
  `}
`;

const ArtistImage = styled(Image)`
  width: 200px;
  height: 200px;
  transition: ${transition};

  ${media.tablet`
    width: 150px;
    height: 150px;
  `}

  ${media.phone`
    width: 100px;
    height: 100px;
  `}
`;

const InfoIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    display: none;
    color: ${color.white};
    width: 50px;
    height: 50px;
    transition: ${transition};
  }
`;

const NoUserIconWrapper = styled.div`
  ${mixins.flexCenter}
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid ${color.lightGray};
  background: ${color.gray};

  svg {
    width: 100px;
    height: 100px;
  }

  ${media.tablet`
    width: 150px;
    height: 150px;
  `}

  ${media.phone`
    width: 100px;
    height: 100px;
  `}
`;

const ArtistName = styled(Link)`
  ${mixins.ellipsis};
  color: ${color.white};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  margin-top: 1em;

  &:hover {
    border-bottom: 1px solid ${color.white};
  }
`;

function ArtistBubble(props) {
  const { id, name, image } = props;

  return (
    <Container>
      <Artist
        to={{
          pathname: `/top-artists/${id}`,
          state: props,
        }}
      >
        {image ? (
          <ImageWrapper>
            <ArtistImage src={image} alt="artist-avatar" />
          </ImageWrapper>
        ) : (
          <NoUserIconWrapper>
            <NoUserIcon />
          </NoUserIconWrapper>
        )}

        <InfoIconWrapper>
          <InfoIcon />
        </InfoIconWrapper>
      </Artist>

      <ArtistName
        to={{
          pathname: `/top-artists/${id}`,
          state: props,
        }}
      >
        {name}
      </ArtistName>
    </Container>
  );
}

export default ArtistBubble;
