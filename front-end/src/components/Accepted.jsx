import React, { useState } from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
import './ShowPosted.scss';
export default function ShowPosted(props) {
  // const handleMessage = function () {
  //   props.onClarify(task.)
  // }
 
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);

  const postedTasks = props.state.tasks
  .filter(task => task.helper_id === userID.user_id)
  .map(task => <div className="posted-item" 
                   key={task.id} 
                   id={task.id}><h2 className="task-title" >{task.name}</h2>
                   <div className="task-underline"></div>
                   <p className="task-description" >{task.description}</p>
                   <Button message="Message Poster!" onClick={() => props.onClarify(task.recipient_id, task.name)} />
 
                   
                   </div>)
  
  const body = (
    <div id="posted-container">
      {postedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}