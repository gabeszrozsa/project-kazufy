import React from 'react';
import SpotifyAPI from "../api/spotifyAPI";
import millisToMinutesAndSeconds from "../util/millisec";

export default class ArtistPopularAlbum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popularAlbums: []
        };
    }

    componentDidMount() {
        this.setTopAlbums();
    }

    setTopAlbums(){
        SpotifyAPI.getTopAlbums(this.props.artistId)
            .then(data => {
                if (!data.error) {
                    this.setState({
                        popularAlbums: data.items
                    })
                } else {
                    console.error('ArtistHeader -> getTopAlbums', data.error);
                }
            });
    }


    render() {
        const Albums = this.state.popularAlbums.map((album, i) =>
            (
                <div key={i} className="col">
                    <div className="card">
                        <img className="card-img-top" src={album.images[0].url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                {album.name} ({album.release_date})
                            </h5>
                            <p className="card-text">Total tracks: {album.total_tracks}</p>
                            <a href={album.external_urls.spotify} className="btn btn-primary">Listen!</a>
                        </div>
                    </div>
                </div>
            ));
        return (
            <div className="container">
                <div className="row">
                    {this.state.popularAlbums.length > 0 && Albums}
                </div>
            </div>
        )
    }
}


