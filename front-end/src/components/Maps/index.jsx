import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import haversine_distance from "./straightLine"

const containerStyle = {
  width: '25vw',
  height: '25vh'
};

const center = {
  lat: 43.46325,
  lng: -79.383186
};
const libraries = ["places"]

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })
  if (loadError) return "ERROR"
  if (!isLoaded) return "LOADING MAPS"
  
  const point1 = {lat: 40.7767644, lng: -73.9761399};
  const point2 = {lat: 40.771209, lng: -73.9673991};
  const D = haversine_distance(point1, point2)
  return (
    <div>{Math.round(D * 100) / 100} KM away</div>
      // <GoogleMap
      //   mapContainerStyle={containerStyle}
      //   center={center}
      //   zoom={10}
      // >
      // </GoogleMap>
  )
}