// Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

//TODO: change later to an actual uri
const redirectUri = "https://localhost:3000";

const clientId = "";

const scopes = ["user-read-currently-playing", "user-recently-played"];

export const loginUrl = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`;
