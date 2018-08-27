import React from 'react';
import SpotifyService from '../api/spotifyService';

export default class IndexPage extends React.Component {
  constructor() {
    super();
    SpotifyService.initSpotify();
  }

  render () {
    return (
      <span>👨‍🚀</span>
    );
  }
}
