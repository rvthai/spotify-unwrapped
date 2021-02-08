import React, { useEffect, useState, useRef } from "react";
import { convertTime, joinArtists } from "utils";
import { PlayIcon, PauseIcon, NoMusicIcon, TrackIcon } from "assets/icons";
import styled from "styled-components";
import { Image } from "styles";
import { theme, mixins } from "styles";

// Components
import Loader from "components/Loader";

const { color, fontSize, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
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

const TrackInfo = styled.div`
  ${mixins.flexRow}
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

const TrackCaption = styled.div`
  display: table;
  table-layout: fixed;
  text-align: left;
  margin-left: 1em;
  width: 100%;
`;

const TrackName = styled.p`
  ${mixins.ellipsis};
  width: 100%:
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
  padding-left: 2em;
`;

function Track(props) {
  const { image, name, artists, duration, preview, activeTrack } = props;

  const [trackArtists, setTrackArtists] = useState("");
  const [trackDuration, setTrackDuration] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [disable, setDisable] = useState(false);

  let audio = useRef();

  useEffect(() => {
    if (preview) {
      audio.current = new Audio();
      audio.current.volume = 0.1;
      audio.current.onended = () => null;
    }

    setTrackArtists(joinArtists(artists));
    setTrackDuration(convertTime(duration));
    setIsPlaying(preview ? activeTrack === preview : false);
    setDisable(preview === null);
  }, [duration, artists, preview, activeTrack]);

  const handleTrackClick = () => {
    if (disable) return null;
    audio.current.play();
    props.onActiveTrackChange(audio, preview);
  };

  return (
    <Container active={isPlaying} onClick={handleTrackClick}>
      <TrackInfo>
        <PreviewWrapper>
          {image ? (
            <TrackImage src={image} alt="track-image" />
          ) : (
            <TrackIconWrapper>
              <TrackIcon />
            </TrackIconWrapper>
          )}
          <IconWrapper disable={disable}>
            {disable ? (
              <NoMusicIcon />
            ) : isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </IconWrapper>
        </PreviewWrapper>
        <div>
          <TrackCaption>
            <TrackName>{name}</TrackName>
            <TrackArtist>{trackArtists}</TrackArtist>
          </TrackCaption>
        </div>
      </TrackInfo>

      <DurationWrapper>
        {isPlaying ? (
          <Loader color={color.lightGreen} isPage={false} />
        ) : (
          <TrackDuration>{trackDuration}</TrackDuration>
        )}
      </DurationWrapper>
    </Container>
  );
}

export default Track;
