import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div style={{height: '5vw', width: '5vw', borderRadius: '50%', backgroundImage: `url('../../assets/signatureLogo.svg')`}}>{text}</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.1,
      lng: -3.8
    },
    zoom: 5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBUiDBIdm8N4ui2s1pkgCbX39HJRHWQLOk"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker lat={this.props.lat} lng={this.props.lng} text={"this"}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export { SimpleMap };
