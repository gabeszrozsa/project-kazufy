import { CLIENT_ID, REDIRECT_URI } from '../config/spotify';

class SpotifyService {
  constructor() {
    this.client_id = CLIENT_ID;
    this.redirect_uri = REDIRECT_URI;

    if (DEV_MODE && SPOTIFY_TOKEN) {
      this.token = SPOTIFY_TOKEN;
    }
  }

  shouldInit() {
    console.log('should init', this.token !== '');
    return this.token !== '';
  }

  setToken(token) {
    console.log('token set: ', token);
    this.token = token;
    sessionStorage.setItem('spotify-bearer', token);
  }

  authorize() {
    console.log('authorizing');
    window.location.assign(`https://accounts.spotify.com/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&scope=user-read-private%20user-read-email&response_type=token&state=123`);
  }

  initSpotify() {
    if (window.location.href.includes('#')) {
      const token = window.location.href.split('#')[1].split('=')[1].split('&')[0];
      this.setToken(token);

      const origin = window.location.origin;
      console.log('redirecting');
      window.location.assign(`${origin}/search`);
    } else {
      this.authorize();
    }
  }

  get(url) {
    if (!this.token) {
      const sessionToken = sessionStorage.getItem('spotify-bearer');
      if (sessionToken) {
        this.token = sessionToken;
      } else {
        console.error('No Spotify token!');
        return;
      }
    }

    return fetch(url, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
    })
    .then(response => response.json());
  }
}

const instance = new SpotifyService();
export default instance;
