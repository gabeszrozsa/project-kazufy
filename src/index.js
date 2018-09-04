import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'

import Nav from './components/Nav';
import Search from './components/Search';
import IndexPage from './components/IndexPage';
import Bands from './components/Bands';

import ArtistHeader from './components/ArtistHeader';
import ArtistPopularAlbum from './components/ArtistPopularAlbum';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bands: [] };
    this.searchArtist = this.searchArtist.bind(this);
  }

  searchArtist(value) {
    this.setState({ bands: value });
  }

  render() {
    const { bands } = this.state;

    return (
      <div>
        <Search searchArtist={this.searchArtist} />
        <Bands bands={bands}/>
      </div>
    )
  }
}

const ArtistPage = () => {
   return (
     <div>
       <ArtistHeader/>
       <ArtistPopularAlbum/>
     </div>
   )
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/artist" component={ArtistPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<App/>, document.getElementById('app'));
