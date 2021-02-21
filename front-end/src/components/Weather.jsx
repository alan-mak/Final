import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export default function Weather(props) {
  const [temp, setTemp] = useState()
  const userID = jwt_decode(props.state.loggedIn).user_id;
  const user = props.state.users.find(user => user.id === userID);

  useEffect(() => {
    props.getWeather({lat: user.lat, lng: user.lng})
    .then(res => setTemp(res.data.main.temp))
  }, [user])

  return (
    <div>
      {temp}
    </div>
  )
}