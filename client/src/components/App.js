import { useEffect, useState } from "react";
import { token } from "../logic";
import { GlobalStyle } from "../styles";

// Components
import Home from "./Home";
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
      {accessToken ? <Home accessToken={accessToken} /> : <Login />}
    </div>
  );
}

export default App;
