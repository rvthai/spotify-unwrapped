function Profile(props) {
  return (
    <div>
      <p>Access Token: {props.accessToken}</p>
      <p>Refresh Token: {props.refreshToken}</p>
    </div>
  );
}

export default Profile;
