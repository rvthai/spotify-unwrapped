function User(props) {
  return (
    <div>
      <img
        src={props.image}
        alt="profile-pic"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      <h1>{props.username}</h1>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
      <p>Playlists: {props.playlists}</p>
    </div>
  );
}

export default User;
