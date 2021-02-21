import React, { useState } from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
import './ShowPosted.scss';
export default function ShowPosted(props) {
  const [completed, setCompleted] = useState(false);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);
  const completeTask = function (task) {
    props.onComplete(task);
    setCompleted(true);
  }

  const acceptedTasks = props.state.tasks
  .filter(task => task.recipient_id === userID.user_id)
  .map(task => <li className="posted-item" 
                   key={task.id} 
                   id={task.id}>{task.name}
                   {(task.helper_id && task.completed_at) && <p>Done! Thanks neighbor</p>}
                   {(task.helper_id && !task.completed_at) && <Button message="mark completed!" onClick={() => completeTask(task)} />} 
                   {!task.helper_id && <p>Nobody has accepted this task yet </p>}
                   
                   </li>)
  
  const body = (
    <div id="posted-container">
      {acceptedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}