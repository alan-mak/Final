import React, { useState } from 'react';
import Button from '../components/Button';
import Maps from './Maps';
import '../components/tasks.scss';
import useApplicationData from '../hooks/useApplicationData';
import jwt_decode from 'jwt-decode'


export default function TaskListItem(props) {
  const [chat, setChat] = useState(false);
  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token)
  const takeTask = function () {
    props.onTake(props.setter, userID.user_id);
    setChat(true);
  };
  return (
    <div className='task-item'>
      <h2 className='task-list-item-title'>{props.name}</h2>
      <div className='task-list-item-title-underline'></div>
      <p className='task-list-item-description'>{props.description}</p>
      <div className='task-list-item-distance'>
        <Maps setter={props.setter} userList={props.userList}/>
      </div>
      {props.accepted && (
        <p className='task-list-item-accepted-message'>
          You accepted this task! Click <strong>Clarify</strong> to contact the
          poster!
        </p>
      )}
      <div className='task-list-item-buttons'>
        {!props.accepted && <Button message='Accept!' onClick={takeTask} />}
        {chat && <p className='task-list-item-accepted-message'>
          View your chatlog in the "chats" tab
        </p>}
        {!chat && <Button
          message='Clarify!'
          onClick={() => props.onAccept(props.setter, props.name)}
        />}
        
      </div>
    </div>
  );
}
