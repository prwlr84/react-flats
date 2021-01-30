import React, { Component } from 'react';
import Flat from './flat.jsx';
import FlatList from './flat-list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <div className="leftS">
          <div className="selected-gif">
            <FlatList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
        <div className="rightS">
          <GMap />
        </div>
      </div>
    );
  }
}

export default App;
