import React, { useEffect, useState } from "react";
import { convertTime, joinArtists } from "utils";

// Components
import Loader from "components/Loader";

// Icons
import { PlayIcon, PauseIcon, NoMusicIcon, TrackIcon } from "assets/icons";

// Styles
import styled from "styled-components";
import { Image } from "styles";
import { theme, mixins, media } from "styles";

const { color, fontSize, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  width: 100%;
  padding: 0.5em 0;
  transition: ${transition};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background: ${color.gray};

      img {
        opacity: 0.5;
      }

      svg {
        display: block;
      }
    }
  }

  ${(props) =>
    props.active &&
    `
    background: ${color.gray};

    p {
      color: ${color.lightGreen};
    }
    
    img {
      opacity: 0.5;
    }

    div > svg {
      display: block;
    }
  `}
`;

const PreviewWrapper = styled.div`
  position: relative;
  margin-left: 0.5em;
`;

const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const TrackIconWrapper = styled.div`
  ${mixins.flexCenter}
  color: ${color.lightGray};
  background-color: ${color.gray};
  width: 50px;
  height: 50px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    display: none;
    border: 1px solid ${color.white};
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }

  ${(props) =>
    !props.disable &&
    `
    &:hover {
      svg {
        width: 30px;
        height: 30px;
      }
    }

    &:active {
      svg {
        color: ${color.lightGray};
        border: 1px solid ${color.lightGray};
        width: 25px;
        height: 25px;
      }
    }
  `}
`;

const TrackRank = styled.p`
  font-size: ${fontSize.sm};
  margin: 0 2em;
`;

const TrackInfo = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignCenter}
  width: 100%;
`;

const TrackCaption = styled.div`
  display: table;
  table-layout: fixed;
  text-align: left;
  width: 100%;
`;

const TrackName = styled.p`
  ${mixins.ellipsis};
  color: ${color.white};
`;

const TrackArtist = styled.p`
  ${mixins.ellipsis};
  font-size: ${fontSize.sm};
`;

const TrackDuration = styled.p`
  font-size: ${fontSize.sm};
`;

const DurationWrapper = styled.div`
  margin-right: 0.5em;
  padding-left: 1em;
`;

function Track(props) {
  const { rank, image, name, artists, duration, preview, activeTrack } = props;

  const [trackArtists, setTrackArtists] = useState("");
  const [trackDuration, setTrackDuration] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setTrackArtists(joinArtists(artists));
    setTrackDuration(convertTime(duration));
    setIsPlaying(preview ? activeTrack === preview : false);
    setDisable(preview === null);
  }, [duration, artists, preview, activeTrack]);

  const handleTrackClick = () => {
    if (disable) return null;
    props.onActiveTrackChange(preview);
  };

  return (
    <Container active={isPlaying} onClick={handleTrackClick}>
      <PreviewWrapper>
        {image ? (
          <TrackImage src={image} alt="track-image" />
        ) : (
          <TrackIconWrapper>
            <TrackIcon />
          </TrackIconWrapper>
        )}
        <IconWrapper disable={disable}>
          {disable ? <NoMusicIcon /> : isPlaying ? <PauseIcon /> : <PlayIcon />}
        </IconWrapper>
      </PreviewWrapper>

      <TrackRank>{rank}</TrackRank>
      <TrackInfo>
        <TrackCaption>
          <TrackName>{name}</TrackName>
          <TrackArtist>{trackArtists}</TrackArtist>
        </TrackCaption>

        <DurationWrapper>
          {isPlaying ? (
            <Loader color={color.lightGreen} isPage={false} />
          ) : (
            <TrackDuration>{trackDuration}</TrackDuration>
          )}
        </DurationWrapper>
      </TrackInfo>
    </Container>
  );
}

export default Track;
