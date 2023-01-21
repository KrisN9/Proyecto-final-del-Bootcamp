import React, { Component } from "react";
import reactDom from "react-dom";
import mapboxgl from "mapbox-gl";

class TestMap extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lng: -3.70315046264256,
      lat: 40.41397175226467,
      zoom: 14
    }
  }

  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })
  }

  render(){
    return (
      <div>
        <div ref={el => this.mapContainer = el} style={{width:'100%', height:'465px'}} />
      </div>
    )
  }

}

export default TestMap;