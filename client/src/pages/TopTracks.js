import { useEffect, useState } from "react";
import { getTopTracks } from "../logic";

const trackStyles = {
  display: "flex",
  alignItems: "center",
  padding: "1em",
};

function TopTracks(props) {
  const [topTracks, setTopTracks] = useState(null);
  const [timeRange, setTimeRange] = useState("long_term");

  useEffect(() => {
    getData();
  }, [timeRange]);

  const getData = async () => {
    try {
      const response = await getTopTracks(timeRange);
      setTopTracks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setTimeRange(event.target.id);
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <div>
        <button id="short_term" onClick={handleClick}>
          Last 4 Weeks
        </button>
        <button id="medium_term" onClick={handleClick}>
          Last 6 Months
        </button>
        <button id="long_term" onClick={handleClick}>
          All Time
        </button>
      </div>

      <h1>Showing top tracks for: {timeRange}</h1>

      {topTracks
        ? topTracks.map((track, index) => (
            <div key={index} style={trackStyles}>
              <p style={{ marginRight: "1em" }}>{index}</p>
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
