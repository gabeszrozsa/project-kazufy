import React from 'react';
import SpotifyAPI from "../api/spotifyAPI";
import millisToMinutesAndSeconds from "../util/millisec"

export default class ArtistHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artist:
                {
                    artistId: this.props.artistId,
                    name:'',
                    popularity: '',
                    followers: '',
                    imageUrl: ''
                },
            topTracks:[]
        };
    }

    componentDidMount() {
        SpotifyAPI.getArtist(this.state.artist.artistId)
            .then(data => {
                if (!data.error) {
                  this.setState({
                    artist:
                    {
                      name: data.name,
                      popularity: data.popularity,
                      followers: data.followers.total,
                      imageUrl: data.images[2].url
                    }
                  });
                } else {
                  console.error('ArtistHeader -> getArtist:', data.error);
                }
            });
        SpotifyAPI.getArtistTopTracks(this.state.artist.artistId)
            .then(data =>{
                if (!data.error) {
                  this.setState({
                    topTracks: data.tracks
                  });
                } else {
                  console.error('ArtistHeader -> getArtistTopTracks:', data.error);
                }
            });
    }

    render(){
        const style = {
            marginBottom: '80px'
        };
        const TopTracks = this.state.topTracks.map((track, i) =>
            (
                <div key={i} className="row margin1">
                    <div className="col-8">
                        <a href={track.preview_url} className="list">
                            {track.name}
                        </a>
                    </div>
                    <div className="col-4">{millisToMinutesAndSeconds(track.duration_ms)}</div>
                </div>
            )
        );
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container" style={style}>
                    <img src={this.state.artist.imageUrl} className="rounded float-right" alt={this.state.artist.name}/>
                    <h1 className="display-4">
                        {this.state.artist.name}
                        <span className="badge badge-secondary">{this.state.artist.popularity}</span>
                    </h1>
                    <p className="lead">Followers: {this.state.artist.followers}</p>
                </div>
                {this.state.topTracks.length > 0 && TopTracks}
            </div>
        )
    }
}
