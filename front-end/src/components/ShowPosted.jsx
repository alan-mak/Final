import React, { useState } from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
import './ShowPosted.scss';
export default function ShowPosted(props) {
  const [completed, setCompleted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);

  const completeTask = function (task) {
    props.onComplete(task);
    setCompleted(true);
  }

  const cancelTask = function (task) {
    props.onCancel(task);
    setCancelled(true);
  }

  const acceptedTasks = props.state.tasks
  .filter(task => task.recipient_id === userID.user_id)
  .map(task => <div className="posted-item" 
                   key={task.id} 
                   id={task.id}>
                     <h2 className="task-title" >{task.name}</h2>
                   <div className="task-underline"></div>
                   <p className="task-description" >{task.description}</p>
                   {(task.helper_id && !task.completed_at) && <Button message="Done?" onClick={() => completeTask(task)} /> 
                   } 
                   {!task.helper_id && <p className="task-message">Nobody has accepted this task yet </p>}
                   {(task.helper_id && task.completed_at) && <p className="task-message" >Done! Thanks neighbor</p>}
                   <Button onClick={() => cancelTask(task)} message="cancel" />
                   
                   </div>)
  
  const body = (
    <div id="posted-container">
      {acceptedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}