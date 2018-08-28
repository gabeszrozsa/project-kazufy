import SpotifyService from './spotifyService';

class SpotifyAPI {
  search(name) {
    const url = `https://api.spotify.com/v1/search?q=${name}&type=artist&limit=5`;
    return SpotifyService.get(url);
  }
}

const instance = new SpotifyAPI();
export default instance;
