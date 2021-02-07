import React, { useEffect, useState } from "react";
import { getPlaylists } from "utils";
import styled from "styled-components";
import { Main, Section, PageHeader, Grid, Image } from "styles";
import { theme, mixins, media } from "styles";

// Components
import Loader from "components/Loader";

const { color, fontSize, transition } = theme;

const Title = styled.h1`
  font-size: ${fontSize.xl};
  margin: 0;

  ${media.tablet`
    margin-bottom: 0.5em;
  `}
`;

const GridItem = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexAlignCenter}
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  transition: ${transition};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      opacity: 0.5;
    }
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

const PlaylistImage = styled(Image)`
  width: 200px;
  height: 200px;

  ${media.tablet`
    width: 150px;
    height: 150px;
  `}

  ${media.phone`
    width: 100px;
    height: 100px;
  `}
`;

const PlaylistTitle = styled.p`
  ${mixins.ellipsis};
  color: ${color.white};
  border-bottom: 1px solid transparent;
  margin-top: 1em;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${color.white};
  }
`;

function Playlists() {
  const [isLoading, setIsLoading] = useState(true);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await getPlaylists();
      let next = response.data.next;

      let data = response.data.items;
      while (next !== null) {
        response = await getPlaylists(next);
        data = data.concat(response.data.items);
        next = response.data.next;
      }
      console.log(data);
      setPlaylists(data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  if (isLoading) return <Loader color={color.lightGray} isPage={true} />;

  return (
    <Main>
      <Section>
        <PageHeader>
          <Title>Playlists</Title>
        </PageHeader>
        <Grid>
          {playlists
            ? playlists.map((playlist, index) => (
                <GridItem
                  key={index}
                  as="a"
                  href={playlist.external_urls.spotify}
                >
                  <ImageWrapper>
                    <PlaylistImage
                      src={playlist.images[0].url}
                      alt="playlist-cover"
                    />
                  </ImageWrapper>
                  <PlaylistTitle as="a" href={playlist.external_urls.spotify}>
                    {playlist.name}
                  </PlaylistTitle>
                </GridItem>
              ))
            : null}
        </Grid>
      </Section>
    </Main>
  );
}

export default Playlists;
