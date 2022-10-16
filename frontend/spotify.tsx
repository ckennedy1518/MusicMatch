// Spotify

//TODO: change later to an actual uri
// const redirectUri = "http://localhost:5173/";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "11890314c28c4460b4eeffe357a237d2";
const REDIRECT_URI = "http://localhost:5173/";
const RESPONSE_TYPE = "token";

const scopes = ["user-recently-played"];

export const loginUrl: string = `${AUTH_ENDPOINT}?
client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&response_type=${RESPONSE_TYPE}
&show_dialog=true`;
