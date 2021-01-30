import React, { Component } from 'react';
import Flat from './flat.jsx';
import FlatList from './flat-list.jsx';
import flats from '../../data/flats'

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
        <div className="leftS">
          <div className="selected-gif">
            <FlatList flatData={this.state.flatData} selectFlat={this.selectFlat} />
          </div>
        </div>
        <div className="rightS">
          {/*<GMap />*/}
        </div>
      </div>
    );
  }
}

export default App;
