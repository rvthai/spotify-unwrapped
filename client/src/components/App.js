import { useEffect, useState } from "react";
import { token } from "../utils";
import { GlobalStyle } from "../styles";

// Components
import Profile from "./Profile";
import Login from "./Login";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    setAccessToken(token.access_token);
    setRefreshToken(token.refresh_token);
  }, []);

  return (
    <div>
      <GlobalStyle />
      {accessToken ? <Profile accessToken={accessToken} /> : <Login />}
    </div>
  );
}

export default App;
