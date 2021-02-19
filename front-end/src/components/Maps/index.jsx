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
    const showAddress = (searchID) => {
      const turtle = props.userList.find(user => user.id === searchID)
      if (turtle) {
        return (turtle.street.split(" ").join("+") +","+ turtle.city.split(" ").join("+") +","+ turtle.province.split(" ").join("+"))
      }
    }

    console.log("SETTER", props.setter)
    console.log("user", userID.user_id)
    Promise.all([
      findCoord(showAddress(props.setter)),
      findCoord(showAddress(userID.user_id)),
    ]).then( addresses => {
      console.log("A", addresses)
      setDistance(haversine_distance({lat: addresses[0].lat, lng: addresses[0].lng}, {lat: addresses[1].lat, lng: addresses[1].lng}))}
      ).catch(err => console.log(err))
    
    // Side-effect!
  }, []);

  return (
    <div>{Math.round(distance * 100) / 100} KM away</div>
  )
}