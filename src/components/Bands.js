import React from 'react';
import { Link } from 'react-router-dom'

const BandItem = (props) => {
  const imgUrl = props.band.images.length > 0 ? props.band.images[0].url : 'default_band.jpg';
  const imgComp = <img className="card-img-top" src={imgUrl} alt="Card image cap"/>;
  const artistLink = `/artist/${props.band.id}`;

  return (
    <div className="col">
        <div className="card">
          {imgComp}
            <div className="card-body">
                <h5 className="card-title">
                    {props.band.name}
                    <a href="#" className="badge badge-dark"> {props.band.popularity}</a>
                </h5>
                <p className="card-text">{props.band.genres.join(', ')}</p>
                <Link to={artistLink}>Go to Artist page</Link>
            </div>
        </div>
    </div>
  );
};

export default class Bands extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const BandList = this.props.bands.map((band, i) =>
      <BandItem key={i} band={band}/>
    );

    return (
        <div className="container">
            <div className="row">
                {this.props.bands.length > 0 && BandList}
            </div>
        </div>
    )
  }
}
