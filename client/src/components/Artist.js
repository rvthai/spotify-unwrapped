import React from "react";

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

const ArtistImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ArtistNumber = styled.p`
  margin: 0 2em 0 1em;
`;

const ArtistInfo = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceBetween}
  ${mixins.flexAlignCenter}
  width: 100%;
`;

const ArtistName = styled.p`
  ${mixins.ellipsis}
  color: ${color.white};
  font-weight: 500;
`;

function Artist(props) {
  const { image, number, name, followers } = props;

  return (
    <Container>
      <ArtistImage src={image} alt="artist-image" />
      <ArtistNumber>{number + 1}</ArtistNumber>
      <ArtistInfo>
        <ArtistName>{name}</ArtistName>
        <p>{followers.toLocaleString()}</p>
      </ArtistInfo>
    </Container>
  );
}

export default Artist;
