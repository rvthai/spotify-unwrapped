function TopArtistsPreview(props) {
  return (
    <div>
      Top Artists of All Time
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.data.map((artist, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default TopArtistsPreview;
