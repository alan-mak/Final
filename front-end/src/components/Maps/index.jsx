import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import haversine_distance from "./straightLine"
import axios from 'axios';

const libraries = ["places"]

export default function Maps() {
  const [addresses, setAddresses] = useState([]);
  const [distance, setDistance] = useState();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })
  
  
  const findCoord = async (incData) => {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params:{
        address: incData,
        key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }
    }
    ).then((res) => {
      // console.log("HELLO", res.data.results[0].geometry.location)
      return res.data.results[0].geometry.location;
    })
  }

  useEffect(() => {
    // Good!
    Promise.all([
      findCoord('1600 Amphitheatre Pkwy'),
      findCoord('1 Hacker Way')
    ]).then( addresses => 
      setDistance(haversine_distance({lat: addresses[0].lat, lng: addresses[0].lng}, {lat: addresses[1].lat, lng: addresses[1].lng}))
      )
    
    // Side-effect!
  }, []);


  return (
    <div>{Math.round(distance * 100) / 100} KM away</div>
  )
}