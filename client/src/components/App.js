import { useEffect, useState } from "react";

// Components
import Profile from "./Profile";
import Login from "./Login";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// color pallete
/*
Green: #1DB954
Black: #191414
White: #fffff
*/

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const params = getHashParams();
    setAccessToken(params.access_token);
    setRefreshToken(params.refresh_token);
  }, []);

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  return (
    <div>
      {accessToken ? (
        <Profile accessToken={accessToken} refreshToken={refreshToken} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
