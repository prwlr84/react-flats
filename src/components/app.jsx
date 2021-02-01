import React, { Component } from 'react';
import Flat from './flat.jsx';
import FlatList from './flat-list.jsx';
import flats from '../../data/flats'
import { SimpleMap, Marker } from './map.jsx'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flatData: flats,
      center: { lat: 48.8566, lng: 2.3522 },
      markerCenter: { lat: 48, lng: 2 },
      zoom: 12
    }
  }

  selectFlat = (lat,lng) => {
    this.setState({
      markerCenter: { lat: lat, lng: lng }
    });
  }

  render() {
    return (
    <div>
      <FlatList flatData={this.state.flatData} selectFlat={this.selectFlat} />
      <div className="map-container">
        <SimpleMap center={this.state.center} zoom={this.state.zoom} lat={this.state.markerCenter.lat} lng={this.state.markerCenter.lng}/>
      </div>
    </div>
    );
  }

}

export default App;
