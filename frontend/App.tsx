// import reactLogo from "./assets/react.svg";
import ourLogo from "./assets/couplet-icon.svg";
import "./styles/App.css";
import { loginUrl } from "./spotify";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // fetch user token for spotify
  const [token, setToken] = useState("");
  // fetch spotify data
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  /**
   * @param e - DOM element
   */
  const searchArtists = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token")!;

    if (token && hash) {
      token = hash
        ?.substring(1)
        ?.split("&")
        ?.find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1]!;

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    if (token != null) {
      setToken(token);
    } else {
      console.log("[Error] token is null.");
    }

    // EXTRA
    searchArtists;
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ourLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Music Match</h1>
      <div className="card">
        <a href={loginUrl} target="_blank">
          <button>Login with Spotify</button>
        </a>
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
