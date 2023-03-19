import React from "react";
import { token } from "utils";
import { GlobalStyle } from "../styles";

// Components
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      {token ? <Home accessToken={token} /> : <Login />}
    </div>
  );
}

export default App;
