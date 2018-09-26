import SpotifyService from './spotifyService';

class SpotifyAPI {
  search(name) {
    const url = `https://api.spotify.com/v1/search?q=${name}&type=artist&limit=5`;
    return SpotifyService.get(url);
  }

  getArtist(id){
    const url = `https://api.spotify.com/v1/artists/${id}`;
    return SpotifyService.get(url);
  }

  getArtistTopTracks(id){
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=HU`
      return SpotifyService.get(url);
  }

  getTopAlbums(id){
    const url = `https://api.spotify.com/v1/artists/${id}/albums?market=hu`
      return SpotifyService.get(url);
  }
}

const instance = new SpotifyAPI();
export default instance;
