import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import haversine_distance from "./straightLine"
import axios from 'axios';

const libraries = ["places"]

export default function Maps(props) {
  const [addresses, setAddresses] = useState([]);
  const [distance, setDistance] = useState();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })
  
  const showAddress = () => {
    let x = props.userList[props.setter]
    return x.props.children[2] + x.props.children[4] + x.props.children[6]
  }
  const findCoord = async (incData) => {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params:{
        address: incData,
        key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }
    }
    ).then((res) => {
      return res.data.results[0].geometry.location;
    })
  }

  useEffect(() => {
    // Good!
    Promise.all([
      findCoord(showAddress()),
      findCoord('759 Candlestick Circle Mississauga'),
    ]).then( addresses => 
      setDistance(haversine_distance({lat: addresses[0].lat, lng: addresses[0].lng}, {lat: addresses[1].lat, lng: addresses[1].lng}))
      )
    
    // Side-effect!
  }, []);

  return (
    <div>{Math.round(distance * 100) / 100} KM away</div>
  )
}