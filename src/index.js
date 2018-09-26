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

const ArtistPage = ({ match }) => {
   return (
     <div>
       <ArtistHeader artistId={match.params.id}/>
       <ArtistPopularAlbum artistId={match.params.id}/>
     </div>
   )
}


class App extends React.Component {
  render() {
    const defaultPage = (!SPOTIFY_TOKEN) ? IndexPage : SearchPage;

    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route path="/" exact component={defaultPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/artist/:id" component={ArtistPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<App/>, document.getElementById('app'));
