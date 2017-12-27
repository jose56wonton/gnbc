import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 41.639449,
          lng: -91.52343
        }}
        style={{ width: "100px", height: "100px", position: "relative" }}
        zoom={15}
      >
        <Marker name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2V60tMfyFTpYK2h9ZelJtMru1DDEsS4U"
})(GoogleMap);
