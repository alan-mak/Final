import React, { useState, useEffect } from 'react'
import haversine_distance from "./straightLine"
import jwt_decode from 'jwt-decode'


export default function Maps(props) {
  const [distance, setDistance] = useState();
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token).user_id
  const showCoord = (searchID) => {
    const turtle = props.userList.find(user => user.id === searchID)
    if (turtle) {
      return {lat: turtle.lat, lng: turtle.lng}
    }
  }
  useEffect(() => {
    const point1 = showCoord(userID)
    const point2 = showCoord(props.setter)
      setDistance(haversine_distance(point1, point2))
  }, [userID])


  return (
    <div>{Math.round(distance * 100) / 100} KM away</div>
  )
}