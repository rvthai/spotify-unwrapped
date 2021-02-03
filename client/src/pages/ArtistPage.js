import React from "react";
import styled from "styled-components";
import { Main, Section, Image, Label, Button } from "styles";
import { theme, mixins, media } from "styles";
import { BackIcon } from "assets/icons";
import { useHistory } from "react-router-dom";

const { color, fontWeight, transition } = theme;

const SectionA = styled(Section)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const HomeButton = styled(Button)`
  margin-top: 2em;
  background: ${color.green};
  color: ${color.white};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;
const ArtistImage = styled(Image)`
  width: 300px;
  height: 300px;
  transition: ${transition};
`;

const Stats = styled.div`
  ${mixins.flexRow}

  ${mixins.flexAlignEnd}
`;
const Stat = styled.div`
  ${mixins.flexRow}
  ${mixins.flexAlignCenter}
`;

const Chips = styled.div`
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 500px;
`;
const Chip = styled.div`
  background: ${color.gray};
  border-radius: 500px;
  padding: 0.5em 1.5em;
  margin: 0.5em;
`;

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

function ArtistPage(props) {
  const { name, genres, image, followers, popularity } = props.location.state;
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <Main>
      <BackIconWrapper onClick={handleClick}>
        <BackIcon />
      </BackIconWrapper>

      <SectionA>
        <ImageWrapper>
          <ArtistImage src={image} alt="artist-profile-pic" />
        </ImageWrapper>
        <h1>{name}</h1>

        <Stats>
          <Stat>
            <Label>
              {followers} FOLLOWERS • {popularity}% POPULARITY
            </Label>
          </Stat>
        </Stats>

        <Chips>
          {genres.map((genre, index) => (
            <Chip key={index}>{genre}</Chip>
          ))}
        </Chips>
        <HomeButton>FOLLOW</HomeButton>
      </SectionA>
    </Main>
  );
}

export default ArtistPage;
