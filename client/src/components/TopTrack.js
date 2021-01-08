function TopTrack(props) {
  return (
    <div>
      Current Top Track
      <div
        style={{
          display: "flex",
          margin: "1rem",
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
          }}
          src={props.data.album.images[2].url}
          alt="album-cover"
        />
        <p style={{ marginLeft: "1em", cursor: "pointer" }}>
          {props.data.name}
        </p>
      </div>
    </div>
  );
}

export default TopTrack;
