import React from 'react';

const Bands = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="artist1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Green Day
                                <a href="#" className="badge badge-dark">6</a>
                            </h5>
                            <p className="card-text">Punk rock</p>
                            <a href="#" className="btn btn-primary">Albums</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="artist2.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Linkin Park
                                <a href="#" className="badge badge-dark">15</a>
                            </h5>
                            <p className="card-text">Alternative rock</p>
                            <a href="#" className="btn btn-primary">Albums</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="artist3.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Sum 41
                                <a href="#" className="badge badge-dark">13</a>
                            </h5>
                            <p className="card-text">Punk rock</p>
                            <a href="#" className="btn btn-primary">Albums</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bands;
