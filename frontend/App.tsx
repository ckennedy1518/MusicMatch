// import reactLogo from "./assets/react.svg";
import ourLogo from "./assets/couplet-icon.svg";
import "./styles/App.css";
import * as SpotifyConsts from "./spotify";
import { useEffect, useState } from "react";
import { useUserData } from "../libs/userhook";
import axios from "axios";

function App() {
  // fetch user token for spotify
  const [token, setToken] = useState("");
  // fetch spotify data
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let unsubscribe;

    const hash = window.location.hash;
    let token = window.localStorage.getItem("token")!;

    if (!token && hash) {
      token = hash
        ?.substring(1)
        ?.split("&")
        ?.find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1]!;

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    // EXTRA
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src={ourLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Music Match</h1>
      <div className="card">
        <a href={SpotifyConsts.loginUrl} target="_blank">
          <button>Login with Spotify</button>
        </a>
        {/* {!token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <p>Please login</p>
        )} */}
        {/* <p>
          Edit <code>frontend/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
