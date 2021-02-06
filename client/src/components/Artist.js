import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Image } from "styles";
import { theme, mixins, media } from "styles";
import { InfoIcon, NoUserIcon } from "assets/icons";

const { color, fontSize, transition } = theme;

const Container = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexAlignCenter}

  ${(props) =>
    props.preview &&
    `
    ${mixins.flexRow}
    padding: 0.5em 0;
    transition: ${transition};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background-color: ${color.gray};

        img {
          opacity: 0.5;
        }
  
        svg {
          display: block;
        }
      }
    }
  `}
`;

const Avatar = styled.div`
  position: relative;
  border-radius: 50%;
  color: ${color.white};
  cursor: pointer;

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

  ${(props) =>
    props.preview &&
    `
    margin-left: 0.5em;
  `}
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

  ${(props) =>
    props.preview &&
    `
    max-width: 50px;
    max-height: 50px;
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

  ${(props) =>
    props.preview &&
    `
    max-width: 50px;
    max-height: 50px;
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

  ${(props) =>
    props.preview &&
    `
    svg {
      width: 25px;
      height: 25px;
    }
  `}
`;

const NoUserIconWrapper = styled.div`
  ${mixins.flexCenter}
  color: ${color.lightGray};
  background-color: ${color.gray};
  width: 200px;
  height: 200px;
  border-radius: 50%;

  svg {
    width: 100px;
    height: 100px;
  }

  ${media.tablet`
    width: 150px;
    height: 150px;

    svg {
      width: 75px;
      height: 75px;
    }
  `}

  ${media.phone`
    width: 100px;
    height: 100px;

    svg {
      width: 50px;
      height: 50px;
    }
  `}

  ${(props) =>
    props.preview &&
    `
    width: 50px;
    height: 50px;

    svg {
      width: 25px;
      height: 25px;
    }
  `}
`;

const ArtistName = styled.p`
  ${mixins.ellipsis};
  color: ${color.white};
  border-bottom: 1px solid transparent;
  margin-top: 1em;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${color.white};
  }

  ${(props) =>
    props.preview &&
    `
    margin: 0;
  `}
`;

const ArtistRank = styled.p`
  font-size: ${fontSize.sm};
  margin: 0 2em;
`;

function Artist(props) {
  const { rank, id, name, image, preview } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/top-artists/${id}`,
      state: props,
    });
  };

  return (
    <Container onClick={handleClick} preview={preview}>
      <Avatar onClick={handleClick} preview={preview}>
        {image ? (
          <ImageWrapper preview={preview}>
            <ArtistImage src={image} alt="artist-avatar" preview={preview} />
          </ImageWrapper>
        ) : (
          <NoUserIconWrapper preview={preview}>
            <NoUserIcon />
          </NoUserIconWrapper>
        )}

        <InfoIconWrapper preview={preview}>
          <InfoIcon />
        </InfoIconWrapper>
      </Avatar>

      {preview ? <ArtistRank>{rank}</ArtistRank> : null}

      <ArtistName onClick={handleClick} preview={preview}>
        {name}
      </ArtistName>
    </Container>
  );
}

export default Artist;
