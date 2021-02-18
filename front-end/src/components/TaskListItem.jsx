import React, { useState } from 'react';
import Button from '../components/Button';
import Maps from './Maps';
import '../components/tasks.scss';

export default function TaskListItem(props) {
  const [accepted, setAccepted] = useState(false);
  const takeTask = function () {
    setAccepted(true);
    props.onTake(props.setter, 1);
  };
  return (
    <div className='task-item'>
      <h2 className='task-list-item-title'>{props.name}</h2>
      <div className='task-list-item-title-underline'></div>
      <p className='task-list-item-description'>{props.description}</p>
      <div className='task-list-item-distance'>
        <Maps />
      </div>
      {accepted && (
        <p className='task-list-item-accepted-message'>
          You accepted this task! Click <strong>Clarify</strong> to contact the
          poster!
        </p>
      )}
      <div className='task-list-item-buttons'>
        {!accepted && <Button message='Accept!' onClick={takeTask} />}
        <Button
          message='Clarify!'
          onClick={() => props.onAccept(props.setter, props.name)}
        />
      </div>
    </div>
  );
}
