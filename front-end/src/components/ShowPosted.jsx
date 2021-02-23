import React, { useState } from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
import PostedItem from './PostedItem';
import './ShowPosted.scss';
export default function ShowPosted(props) {
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(true);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);

  const acceptedTasks = props.state.tasks
  .filter(task => task.recipient_id === userID.user_id)
  .map(task => <PostedItem
                key={task.id} 
                id={task.id}
                name={task.name}
                description={task.description}
                complete={props.onComplete}
                cancel={props.onCancel}
                task={task} /> )
                
                   
  
  const body = (
    <div id="posted-container">
      {acceptedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}