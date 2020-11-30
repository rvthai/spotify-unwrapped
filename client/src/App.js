import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    callBackendAPI().then((res) => {
      setMessage(res);
    });
  }, [setMessage]);

  const callBackendAPI = async () => {
    const response = await fetch("/express");
    const body = await response.json();

    return body.message;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
