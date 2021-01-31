import React, { Component } from 'react';
import Flat from './flat.jsx';
import FlatList from './flat-list.jsx';
import flats from '../../data/flats'
import SimpleMap from './map.jsx'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      flatData: flats
    }
  }

  selectFlat = () => {

  }

  render() {
    return (
    <div>
      <FlatList flatData={this.state.flatData} selectFlat={this.selectFlat} />
      <div className="map-container">
        <SimpleMap center={{ lat: 45.1, lng: -3.8 }} zoom={11}/>
      </div>
    </div>
    );
  }

}

export default App;
