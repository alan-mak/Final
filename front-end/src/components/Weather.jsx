import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export default function Weather(props) {
  const [temp, setTemp] = useState()
  const [icon, setIcon] = useState()
  const userID = jwt_decode(props.state.loggedIn).user_id;
  const user = props.state.users.find(user => user.id === userID);

  useEffect(() => {
    props.getWeather({lat: user.lat, lng: user.lng})
    .then(res => {
      setTemp(res.data.main.temp)
      const iconCode = res.data.weather[0].icon
      setIcon(`http://openweathermap.org/img/wn/${iconCode}@2x.png`)
    })
  }, [user])
  console.log(icon)
  return (
    <div id='nav-left'>
        <img src={icon}/>     
      <div>
        Temperature In Your Area:
      <div>
        {temp} °C
      </div>
      </div>
    </div>
  )
}