import { useEffect, useState } from "react";
import { getTopArtists } from "../api";

function TopArtists() {
  const [topArtists, setTopArtists] = useState(null);
  const [timeRange, setTimeRange] = useState("long_term");

  useEffect(() => {
    getData();
  }, [timeRange]);

  const getData = async () => {
    const response = await getTopArtists(timeRange, 50);
    setTopArtists(response.data.items);
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

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {topArtists
          ? topArtists.map((artist, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1rem",
                }}
              >
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  src={artist.images[2].url}
                  alt="artist-profile-pic"
                />
                <p>{artist.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default TopArtists;
