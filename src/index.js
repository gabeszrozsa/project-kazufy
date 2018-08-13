import React from 'react';
import { render } from 'react-dom';

import Nav from './components/Nav';
import Search from './components/Search';
import Artists from './components/Artists';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Search/>
        <Artists/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));

/*
<div>

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

</div>
*/
