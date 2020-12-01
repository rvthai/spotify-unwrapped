import { useEffect, useState } from "react";

// color pallete
/*
Green: #1DB954
Black: #191414
White: #fffff
*/

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
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
