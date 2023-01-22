import React, { Component } from "react";
import reactDom from "react-dom";
import mapboxgl from "mapbox-gl";
import Autofill from "./Autofill";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken='pk.eyJ1Ijoia3Jpc245IiwiYSI6ImNsZDV4Y2x0ZTByOHIzb2tianpoZ2xmeWgifQ.M8N3QZtBSFlC_MPoI-PVTQ';

class TestMap extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lng: -3.70315046264256,
      lat: 40.41397175226467,
      zoom: 10
    }
  }

  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    const marker = new mapboxgl.Marker() // Initialize a new marker
    .setLngLat([80.632416, 7.29163]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map
  
    const geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search for places in Sri Lanka', // Placeholder text for the search bar
      bbox: [79.0000, 5.0000, 82.0000, 10.0000], // Sri lanka 
      proximity: {
        longitude: -122.25948,
        latitude: 37.87221
      } 
  });

  }

  render(){
    return (
      <>
      <div>
        <Autofill />
      </div>
      <div>
        <div ref={el => this.mapContainer = el} style={{width:'100%', height:'465px'}} />
      </div>
      </>
    )
  }

}

export default TestMap;