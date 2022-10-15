from flask import Flask, request, redirect, url_for, session
import spotipy
from spotipy.oauth2 import SpotifyOAuth

app = Flask(__name__)
# app.secret_key = 'dasd91290jd190xj10x'
# app.config['SESSION_COOKIE_NAME'] = 'scoobs cookie'

@app.route('/')
def home():
    return 'Basic Home Page'


@app.route('/profile')
def profile():
    return 'Profile Page'

if __name__ == '__main__':
    app.run(debug = True)

