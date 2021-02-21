import React, { useEffect } from 'react';
import Button from '../Button';

import useApplicationData from '../../hooks/useApplicationData';

import '../TaskItem/TaskItem.scss';
import './Show.scss';

export default function Show(props) {
  const { getTask } = useApplicationData();

  useEffect(() => {
    getTask(props.match.params.task_id).then(res => {
      console.log('***Task***:', res.data);
    });
  }, []);

  return (
    <section id='show-section'>
      {console.log()}
      <p>{props.description}</p>
      <p>Estimated time: {props.time_to_complete}</p>
      <div id='button-group'>
        <Button id='task-accept' message='Accept!' />
        <Button id='task-clarify' message='Clarify' />
      </div>
    </section>
  );
}
