import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowAccepted.scss';
import jwt_decode from 'jwt-decode'
export default function ShowAccepted (props) {
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);
useEffect(() => {
  document.title = { taskList };
}, []);
  let taskList = props.tasks
  .filter(task => task.helper_id === userID.user_id)
  .map(item => {
  return <li key={item.id} id={item.id}>{item.name}</li>});

  
  return (
    <Link to={'/Accepted'}>
    <div id="task-div">
      {taskList.length > 0 && <p>Thank's for helping out, here's what you promised to do!</p>}
      <ul>
      { taskList }
      </ul>
    </div>
    </Link>
  )
}