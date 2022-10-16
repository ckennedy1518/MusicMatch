from flask import Flask, request, redirect, url_for, session
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import secrets
import time
import json

app = Flask(__name__)
app.secret_key = secrets.token_urlsafe(16)
app.config['SESSION_COOKIE_NAME'] = 'scoobs cookie'

TOKEN_INFO = "token_info"

@app.route('/')
def login():
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)


@app.route('/redirect')
def redirect_page():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session[TOKEN_INFO] = token_info

    return redirect(url_for('getTracks', _external=True))

@app.route('/getTrack')
def getTracks():
    try:
        token_info = get_token()
    except:
        print('User not logged in')
        return redirect(url_for('login',  _external=True))

    sp = spotipy.Spotify(auth=token_info['access_token'])

    user_id = sp.current_user()['id']
    print('User ID:', user_id)

    # sp.user_playlist_create(user_id, 'Test Playlist', public = False)
    return f'The user is playing the song {sp.current_user_playing_track()["item"]["name"]}'
    

def get_token():
    token_info = session.get(TOKEN_INFO)
    if not token_info: raise Exception('User is not logged in')

    # Check if token is expired
    now = time.time()
    is_expired = token_info['expires_at'] - now < 60 
    if is_expired:
        # if token expired, get new token
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])

    return token_info

# Gets the OAuth Object for us to get info from the Spotify API
def create_spotify_oauth():
    return SpotifyOAuth (
        client_id = '',
        client_secret = '',
        redirect_uri = url_for('redirect_page', _external=True),
        scope = 'user-library-read playlist-modify-private user-read-currently-playing'
    )

if __name__ == '__main__':
    app.run(debug = True)

