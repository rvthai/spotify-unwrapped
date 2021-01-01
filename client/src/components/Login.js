const loginButtonStyle = {
  textDecoration: "none",
  color: "#fff",
  padding: "15px 50px",
  background: "#1DB954",
  borderRadius: "25px",
};

const container = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  textAlign: "center",
};

function Login() {
  return (
    <div style={container}>
      <h1 style={{ fontSize: "85px" }}>Spotify</h1>
      <h1
        style={{ fontSize: "50px", paddingBottom: "1rem", marginTop: "-25px" }}
      >
        Vibe Check
      </h1>
      <a href="http://localhost:8888/login" style={loginButtonStyle}>
        LOG IN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
