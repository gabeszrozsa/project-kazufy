import React from 'react';

const Search = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center text-secondary">Project Kazufy</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="form-control form-control-lg" type="text" placeholder="Artists / bands ..."/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success btn btn-primary btn-lg btn-block">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search;