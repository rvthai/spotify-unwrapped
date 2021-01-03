import { useEffect, useState } from "react";
import { getTopTracks } from "../logic";

const trackStyles = {
  display: "flex",
  alignItems: "center",
  padding: "1em",
};

function TopTracks(props) {
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getTopTracks();
      console.log("HERE");
      console.log(response.data.items);
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {topTracks
        ? topTracks.map((track, index) => (
            <div key={index} style={trackStyles}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={track.album.images[2].url}
                alt="album-cover"
              />
              <p style={{ marginLeft: "1em", cursor: "pointer" }}>
                {track.name}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

export default TopTracks;
