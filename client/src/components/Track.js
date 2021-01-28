import React, { useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import { Image, Text } from "styles";
import { theme, mixins } from "styles";

const { color, fontSize } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
  margin: 1em 0;
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
`;
const TrackName = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
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
          <Text>{artists}</Text>
        </TrackLabel>
        {/* <Text>{time}</Text> */}
      </TrackInfo>
    </Container>
  );
}

export default Track;
