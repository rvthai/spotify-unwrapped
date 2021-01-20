import { Button, Main, mixins } from "../styles";
import styled from "styled-components";

const LoginContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const LoginButton = styled(Button)`
  border-radius: 25px;
  letter-spacing: 2px;
  text-decoration: none;
  color: #fff;
`;

const URL = "http://localhost:8888/login";

const Login = () => (
  <LoginContainer>
    <h1>Statify</h1>
    <LoginButton as="a" href={URL}>
      LOG IN WITH SPOTIFY
    </LoginButton>
  </LoginContainer>
);

export default Login;
/*
Original: #1db954
#4bdf80 or #1ed760 hover
#18ac4d focus
#1aa34a active
*/

/*

  &:hover {
    background: #1ed760;
  }

  &:focus {
    background: #18ac4d;
  }

  &:active {
    background: #1aa34a;
  }*/
