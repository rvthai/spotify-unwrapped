import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { getPlaylists } from "utils";

// Styles
import { Main, Section, Header } from "styles";

const HeaderA = styled(Header)`
  border: none;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  margin: 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  row-gap: 2em;
`;

function Playlists(props) {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = [];
      let nextURL = "https://api.spotify.com/v1/me/playlists";

      while (nextURL !== null) {
        const response = await getPlaylists(nextURL);
        nextURL = response.data.next;
        data = data.concat(response.data.items);
      }

      setPlaylists(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Section>
        <HeaderA>
          <Title>Playlists</Title>
        </HeaderA>
        <Content>
          {playlists
            ? playlists.map((playlist, index) => (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={playlist.images[0].url}
                    alt="playlist-cover"
                  />
                  <p>Name: {playlist.name}</p>
                  <p>Description: {playlist.description}</p>
                </div>
              ))
            : null}
        </Content>
      </Section>
    </Main>
  );
}

export default Playlists;
