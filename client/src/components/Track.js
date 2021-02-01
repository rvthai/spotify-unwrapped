import React, { useEffect, useState } from "react";

// Components
import Loader from "components/Loader";

// Utils
import { convertTime, joinArtists } from "utils";

// Icons
import { PlayIcon, PauseIcon } from "assets/icons";

// Styles
import styled from "styled-components";
import { Image, Text } from "styles";
import { theme, mixins } from "styles";

const { color, fontSize, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  width: 100%;
  transition: ${transition};
  padding: 0.5em 0;

  &:hover {
    background: #212121;

    img {
      opacity: 0.5;
    }

    svg {
      display: block;
    }
  }
`;

const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    display: none;
    width: 35px;
    height: 35px;
  }
`;

const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const TrackNumber = styled(Text)`
  margin: 0 2em;
`;

const TrackInfo = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignCenter}
  width: 100%;
`;

const TrackLabel = styled.div`
  ${mixins.flexColumn};
  ${mixins.flexAlignStart};
  ${mixins.flexJustifyCenter};
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
  margin-right: 0.5em;
`;

function Track(props) {
  const [artists, setArtists] = useState("");
  const [time, setTime] = useState("");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timeStr = convertTime(props.time);
    const artistsStr = joinArtists(props.artists);

    setArtists(artistsStr);
    setTime(timeStr);
  }, [props.time, props.artists]);

  const handleTrackClick = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  const { image, number, name } = props;

  return (
    <Container onClick={handleTrackClick}>
      <div
        style={{
          position: "relative",
          marginLeft: "0.5em",
        }}
      >
        <TrackImage src={image} alt="track-image" />
        <PlayIconWrapper>{play ? <PauseIcon /> : <PlayIcon />}</PlayIconWrapper>
      </div>
      <TrackNumber>{number + 1}</TrackNumber>
      <TrackInfo>
        <TrackLabel>
          <TrackName>{name}</TrackName>
          <TrackArtist>{artists}</TrackArtist>
        </TrackLabel>
        {play ? <Loader /> : <TrackDuration>{time}</TrackDuration>}
      </TrackInfo>
    </Container>
  );
}

export default Track;
