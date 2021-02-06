import React, { useEffect, useState } from "react";
import { getPlaylists } from "utils";
import styled from "styled-components";
import { Main, Section, PageHeader, Image } from "styles";
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

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  column-gap: 2em;
  row-gap: 2em;
  margin-top: 2em;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const PlaylistImage = styled(Image)`
  width: 200px;
  height: 200px;
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
        <Content>
          {playlists
            ? playlists.map((playlist, index) => (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <ImageWrapper>
                    <PlaylistImage
                      src={playlist.images[0].url}
                      alt="playlist-cover"
                    />
                  </ImageWrapper>
                  <p>Name: {playlist.name}</p>
                </div>
              ))
            : null}
        </Content>
      </Section>
    </Main>
  );
}

export default Playlists;
