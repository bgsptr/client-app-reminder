import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
// import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import "leaflet/dist/leaflet.css";
// import LeafletControlGeocoder from "./leaflet-control";

import SearchField from "./SearchField";

import RoutingControl from "./RoutingControl";

const LeafletMap = () => {
  const prov = new OpenStreetMapProvider();
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={8}
      style={{ height: "900px", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={[21.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <SearchField
        provider={prov}
        // showMarker={true}
        // showPopup={false}
        // popupFormat={({ query, result }) => result.label}
        // maxMarkers={3}
        // retainZoomLevel={false}
        // animateZoom={true}
        // autoClose={false}
        // searchLabel={"Enter address, please"}
        // keepResult={true}
      />
      <RoutingControl />
    </MapContainer>
  );
};

export default LeafletMap;
