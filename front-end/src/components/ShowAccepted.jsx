import React, { useEffect, useState } from 'react';
import './ShowAccepted.scss';
import jwt_decode from 'jwt-decode'
export default function ShowAccepted (props) {
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);
  console.log(userID);

  let taskList = props.tasks
  .filter(task => task.helper_id === userID.user_id)
  .map(item => {
  return <li key={item.id} id={item.id}>{item.name}</li>});
  
  return (

    <div id="task-div">
      {taskList.length > 0 && <p>Thank's for helping out, here's what you promised to do!</p>}
      <ul>
      { taskList }
      </ul>
    </div>
  )
}