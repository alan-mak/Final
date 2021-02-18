import React, { useEffect, useState } from 'react';

export default function ShowAccepted (props) {

  let taskList = props.tasks.map(item => {
  return <li key={item.id} id={item.id}>{item.name}</li>});
  
  return (
    <div id="task-div">
      <p>Thank's for helping out, here's what you promised to do!</p>
      <ul>
      { taskList }
      </ul>
    </div>
  )
}