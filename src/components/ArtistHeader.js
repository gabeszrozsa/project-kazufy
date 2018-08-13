import React from 'react';

const ArtistHeader = () => {
    const style = {
        marginTop: '80px'
    }
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <img src="bandofhorses.jpg" className="rounded float-right" alt="Band of Horses"/>
                    <h1 className="display-4">
                        Band of Horses
                        <span className="badge badge-secondary">59</span>
                    </h1>
                    <p className="lead">Followers: 30509</p>
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

export default ArtistHeader;