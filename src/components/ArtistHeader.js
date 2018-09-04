import React from 'react';
import SpotifyAPI from "../api/spotifyAPI";

export default class ArtistHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {artistId:'0OdUWJ0sBjDrqHygGUXeCF', name:'', popularity: '', followers: '', imageUrl: ''};
        SpotifyAPI.getArtist(this.state.artistId)
            .then(data => {
                console.log(data)
                this.setState({name: data.name, popularity: data.popularity, followers: data.followers.total,
                    imageUrl: data.images[2].url});
            })
    }

    render(){
        const style = {
            marginTop: '80px'
        }
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src={this.state.imageUrl} className="rounded float-right" alt={this.state.name}/>
                    <h1 className="display-4">
                        {this.state.name}
                        <span className="badge badge-secondary">{this.state.popularity}</span>
                    </h1>
                    <p className="lead">Followers: {this.state.followers}</p>
                </div>

                <div className="row margin1" style={style}>
                    <div className="col-8">
                        <a href="https://open.spotify.com/track/371akJ9fYgSkrAFMyWoTdL" className="list">
                            Band of Horses - No One's Gonna Love You (Stockholm Version)
                        </a>
                    </div>
                    <div className="col-4">3:48</div>
                </div>
                <div className="row margin1">
                    <div className="col-8">
                        <a href="https://open.spotify.com/track/4o0NjemqhmsYLIMwlcosvW" className="list">
                            Band of Horses - The Funeral
                        </a>
                    </div>
                    <div className="col-4">5:21</div>
                </div>
            </div>
        )
    }
}