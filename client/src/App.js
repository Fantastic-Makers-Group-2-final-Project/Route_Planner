import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  marginTop: '5%',
  marginBottom: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
  height: '50%',
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [{latitude: 51.5151168, longitude: -0.0716303}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{lat: 51.5151168, lng: -0.0716303}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDro0XKEZYd8mj42cXWVukmO0WKJstaAYs'
})(MapContainer);
