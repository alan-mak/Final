import React from 'react';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

import '../TaskItem/TaskItem.scss';
import '../tasks.scss';

export default function Show(props) {
  const task = props.state.tasks.find(
    task => task.id === parseInt(props.match.params.task_id)
  );

  let history = useHistory();

  return (
    <section id='show-section'>
      <div className='task-item'>
        <h2 className='task-list-item-title'>{task && task.name}</h2>
        <div className='task-list-item-title-underline'></div>
        <p className='task-list-item-description'>{task && task.description}</p>
        <p className='task-list-item-duration'>
          Estimated time: {task && task.duration}
        </p>
      </div>

      <Button message='Go Back' onClick={() => history.push(`/choice`)} />
    </section>
  );
}
