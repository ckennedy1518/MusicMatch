// import reactLogo from "./assets/react.svg";
import ourLogo from "./assets/couplet-icon.svg";
import "./styles/App.css";
import { auth, firestore } from "../libs/Firebase";
import * as SpotifyConsts from "./spotify";
import { useEffect, useState, useContext } from "react";
import { useUserData } from "../libs/userhook";
import { UserContext } from "../libs/context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import axios from "axios";

function App() {
  // fetch user token for spotify
  const [token, setToken] = useState("");
  // fetch spotify data
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  //   async function onSubmit() {
  //     const { user, spotifytoken } = useContext(UserContext);

  //     // Create refs for both documents
  //     const userDoc = firestore.doc(`users/${user.uid}`);
  //     const spotifytokenDoc = firestore.doc(
  //       `spotifytokens/${spotifytoken.value}`
  //     );

  //     // Commit both docs together as a batch write.
  //     const batch = firestore.batch();
  //     batch.set(userDoc, { spotifytoken: spotifytoken });
  //     batch.set(spotifytokenDoc, { uid: user.uid });

  //     await batch.commit();
  //   }

  useEffect(() => {
    const userRef = firestore.collection("Users");
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

    let snapshot: any;

    const sendToken = async () => {
      snapshot = await userRef.where("spotifytoken", "==", token).get();

      if (snapshot.empty) {
        await userRef.add({
          spotifytoken: token,
        });
      } else {
        console.log("User must esxist");
      }
    };

    sendToken();

    // EXTRA
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user: null, spotifytoken: null }}>
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
    </UserContext.Provider>
  );
}

export default App;
