import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import haversine_distance from "./straightLine"
import axios from 'axios';
import jwt_decode from 'jwt-decode'


export default function Maps(props) {
  const [addresses, setAddresses] = useState([]);
  const [distance, setDistance] = useState();
  
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token)
  
  const showAddress = (searchID) => {
    let x = props.userList[searchID]
    return x.props.children[2].split(" ").join("+") + x.props.children[4].split(" ").join("+") + x.props.children[6].split(" ").join("+")
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
    }).catch((err) => console.log(err))
  }
  useEffect(() => {
    // Good!
    Promise.all([
      findCoord(showAddress(props.setter)),
      findCoord(showAddress(userID.user_id)),
    ]).then( addresses => 
      setDistance(haversine_distance({lat: addresses[0].lat, lng: addresses[0].lng}, {lat: addresses[1].lat, lng: addresses[1].lng}))
      ).catch(err => console.log(err))
    
    // Side-effect!
  }, []);

  return (
    <div>{Math.round(distance * 100) / 100} KM away</div>
  )
}