//mport { LoginButton } from "../styles";
import styled from "styled-components";

const container = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  textAlign: "center",
};

const LoginButton = styled.a`
  textDecoration: none,
  color: #fff,
  padding: 15px 50px,
  background: #1DB954,
  borderRadius: 25px,
`;

const Login = () => (
  <div style={container}>
    <h1 style={{ fontSize: "85px" }}>Statify</h1>
    <LoginButton href="http://localhost:8888/login">
      LOG IN WITH SPOTIFY
    </LoginButton>
  </div>
);

export default Login;
