import { CLIENT_ID, REDIRECT_URI } from '../config/spotify';

class SpotifyService {
  constructor() {
    this.client_id = CLIENT_ID;
    this.redirect_uri = REDIRECT_URI;
  }

  authorize() {
    console.log('...authorizing');
    window.location.assign(`https://accounts.spotify.com/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&scope=user-read-private%20user-read-email&response_type=token&state=123`);
  }

  initSpotify() {
    if (window.location.href.includes('#')) {
      console.log('...setting token');
      const token = window.location.href.split('#')[1].split('=')[1].split('&')[0];
      this.token = token;
      // sessionStorage.setItem('spotify-bearer', token);
      //
      // const origin = window.location.origin;
      // console.log('...redirecting to Search');
      // window.location.assign(`${origin}/search`);
    } else {
      // this.authorize();
    }
  }
}

const instance = new SpotifyService();
export default instance;
