import { LoginButton } from "../styles";

const container = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  textAlign: "center",
};
const url = "http://localhost:8888/login";

const Login = () => (
  <div style={container}>
    <h1 style={{ fontSize: "85px" }}>Statify</h1>
    <LoginButton href={url}>LOG IN WITH SPOTIFY</LoginButton>
  </div>
);

export default Login;
