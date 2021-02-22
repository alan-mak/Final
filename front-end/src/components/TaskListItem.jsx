import React, { useState } from 'react';
import Button from '../components/Button';
import Maps from './Maps';
import '../components/tasks.scss';
import jwt_decode from 'jwt-decode'


export default function TaskListItem(props) {
  const [chat, setChat] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token);
  const clarifyTask = function () {
    props.onClarify(props.setter, props.name);
    setChat(true);
  };
  const handleAccept = function () {
    console.log("you are", userID);
    props.onAccept(props.setter, userID.user_id)
    setAccepted(true);
  }
  return (
    <div className='task-item'>
      <h2 className='task-list-item-title'>{props.name}</h2>
      <div className='task-list-item-title-underline'></div>
      <p className='task-list-item-description'>{props.description}</p>
      <div className='task-list-item-distance'>
        {props.setter && <Maps setter={props.setter} userList={props.userList}/>}
      </div>
   
      <div className='task-list-item-buttons'>
      {((props.accepted || accepted) && !chat) && (
        <p className='task-list-item-accepted-message'>
          You accepted this task! Click <strong>Clarify</strong> to contact the
          poster!
        </p>
      )}
        {(!props.accepted && !accepted) && <Button message='Accept!' onClick={handleAccept} />}
        {chat && <p className='task-list-item-accepted-message'>
          View your chatlog in the "Chat" tab
        </p>}
        {!chat && <Button 
          className="task-button-no-border"
          message='Clarify!'
          onClick={clarifyTask}
        />}  
      </div>
    </div>
  );
}
