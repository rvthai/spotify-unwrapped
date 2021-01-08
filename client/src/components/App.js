import { token } from "../logic";
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
