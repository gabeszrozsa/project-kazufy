import React from 'react';
import SpotifyService from '../api/spotifyService';

const DEV_MODE = false;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    if (!DEV_MODE) {
      if (SpotifyService.shouldInit()) {
        SpotifyService.initSpotify();
      } else {
        const origin = window.location.origin;
        window.location.assign(`${origin}/search`);
      }
    }

    this.state = { value: '', tokenSet: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({tokenSet: true});
    SpotifyService.setToken(this.state.value);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>DEV MODE!</h1>
        <label>
          Spotify Bearer token:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.tokenSet && <h2 style={{color: 'green'}}>Token has been set!</h2>}
      </form>
    );
  }
}
