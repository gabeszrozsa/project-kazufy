import React from 'react';
import SpotifyAPI from '../api/spotifyAPI';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    event.preventDefault();
    SpotifyAPI.search(this.state.value)
      .then(data => console.log(data.artists))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-secondary">Project Scottify</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input className="form-control form-control-lg" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Artists / bands ..."/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-success btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Search</button>
          </div>
        </div>
      </div>
    )
  }
}
