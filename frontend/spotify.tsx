// Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

//TODO: change later to an actual uri
const redirectUri = "https://localhost:3000";

const clientId = "11890314c28c4460b4eeffe357a237d2";

const scopes = [
  "user-read-currently-playing",
  "user-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl: string = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;
