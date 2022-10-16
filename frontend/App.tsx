import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import ourLogo from "./assets/couplet-icon.svg";
import "./App.css";
import { loginUrl } from "./spotify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ourLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Music Match</h1>
      <div className="card">
        <button
          onClick={() => {
            console.log(loginUrl);
            window.location = loginUrl;
          }}
        >
          Sign in with Spotify
        </button>
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
