import React, { useState } from 'react';
import Button from './Button';
import jwt_decode from 'jwt-decode';

export default function PostedItem(props) {
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(true);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);
  const completeTask = function (task) {
    props.complete(task);
    setCompleted(true);
  }

  const cancelTask = function (task) {
    props.cancel(task);
    setActive(false);
  }

  return (
                   <div className="posted-item" 
                   key={props.id} 
                   id={props.id}>
                   <h2 className="task-title" >{props.name}</h2>
                   <div className="task-underline"></div>
                   <p className="task-description" >{props.description}</p>
                   {(props.task.helper_id && !props.task.completed_at && active) && <Button message="Done?" onClick={() => completeTask(props.task)} /> } 
                   {(!props.task.helper_id && active) && <p className="task-message">Nobody has accepted this task yet </p>}
                   {(props.task.helper_id && props.task.completed_at) && <p className="task-message" >Done! Thanks neighbor</p>}
                   {(active && !props.task.completed_at) && <Button id="cancel" onClick={() => cancelTask(props.task)} message="Cancel" />}
                   {!active && <p className="task-message">You cancelled this task</p>}
                  
                   </div>
  )
}