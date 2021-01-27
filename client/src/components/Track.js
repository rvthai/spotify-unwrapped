import React, { useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { Image } from "styles";
import { theme, mixins } from "styles";

const { color } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  margin: 1em 0;
`;

const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const TrackNumber = styled.p`
  margin: 0 2em 0 1em;
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
`;
const TrackName = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
  font-weight: 500;
`;
const TrackArtist = styled.p`
  ${mixins.ellipsis}
`;

function Track(props) {
  const [artists, setArtists] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timeStr = convertTime(props.time);
    const artistsStr = joinArtists(props.artists);

    setArtists(artistsStr);
    setTime(timeStr);
  }, []);

  const convertTime = (ms) => {
    const min = Math.floor((ms / 1000 / 60) << 0);
    const sec = Math.floor((ms / 1000) % 60);

    let connector = ":";
    if (sec < 10) {
      connector += "0";
    }

    return min + connector + sec;
  };

  const joinArtists = (a) => {
    let l = [];

    for (let i = 0; i < a.length; i++) {
      l.push(a[i].name);
    }

    return l.join(", ");
  };

  const { image, number, name } = props;

  return (
    <Container>
      <TrackImage src={image} alt="track-image" />
      <TrackNumber>{number + 1}</TrackNumber>
      <TrackInfo>
        <TrackLabel>
          <TrackName>{name}</TrackName>
          <TrackArtist>{artists}</TrackArtist>
        </TrackLabel>
        <p>{time}</p>
      </TrackInfo>
    </Container>
  );
}

export default Track;
