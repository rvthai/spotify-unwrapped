function TopArtist(props) {
  return (
    <div>
      Current Top Artist
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
            borderRadius: "50%",
          }}
          src={props.data.images[2].url}
          alt="artist-profile-pic"
        />
        <p
          style={{
            marginLeft: "1rem",
          }}
        >
          {props.data.name}
        </p>
      </div>
    </div>
  );
}

export default TopArtist;
