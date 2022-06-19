import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [serverMessage, setServerMessage] = useState("");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const getServerMessage = async () => {
      try {
        document.cookie =
          "message=hello world; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None;";
        const res = await axios.get("http://localhost:4000/hello", {
          withCredentials: true,
        });

        setServerMessage(res.data);
      } catch (error: any) {
        setServerError(error.toString());
      }
    };

    getServerMessage();
  }, []);

  if (serverError)
    return <p style={{ color: "red" }}>Server Error: {serverError}</p>;

  if (!serverMessage) return <p>Loading...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message: {serverMessage}</h1>
      </header>
    </div>
  );
}

export default App;
