import React from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
export default function ShowPosted(props) {
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);

  const acceptedTasks = props.state.tasks
  .filter(task => task.helper_id === userID.user_id)
  .map(task => <li key={task.id} id={task.id}>{task.name} <Button onClick={() => props.onComplete(task)} /></li>)
  
  const body = (
    <div>I am show posted
      {acceptedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}