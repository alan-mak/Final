import React from 'react';
import Background from './Background';
import jwt_decode from 'jwt-decode';
import Button from './Button';
import './ShowPosted.scss';
export default function ShowPosted(props) {
  console.log(props);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);

  const acceptedTasks = props.state.tasks
  .filter(task => task.recipient_id === userID.user_id)
  .map(task => <li className="posted-item" key={task.id} id={task.id}>{task.name} <Button message="mark completed!" onClick={() => props.onComplete(task)} /></li>)
  
  const body = (
    <div id="posted-container">
      {acceptedTasks}
    </div>
  )
  return (
    <Background body={body} />
  )
}