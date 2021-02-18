import React from 'react';
import Button from '../components/Button';

import '../components/tasks.scss';

export default function TaskListItem(props) {
  return (
    <div className='task-item'>
      <h2 className='task-list-item-title'>{props.name}</h2>
      <div className='task-list-item-title-underline'></div>
      <p className='task-list-item-description'>{props.description}</p>
      <div className='task-list-item-buttons'>
        <Button message='Accept!' />
        <Button
          message='Clarify!'
          onClick={() => props.onAccept(props.setter, props.name)}
        />
      </div>
    </div>
  );
}
