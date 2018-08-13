import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Kazufy</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/artist">Artists</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="albums.html">Albums</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
