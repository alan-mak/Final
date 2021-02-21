import React from 'react';
import Button from '../Button';

import '../TaskItem/TaskItem.scss';
import './Show.scss';

export default function Show(props) {
  return (
    <section id='show-section'>
      {console.log(props.state)}
      <p>{props.description}</p>
      <p>Estimated time: {props.time_to_complete}</p>
      <div id='button-group'>
        <Button id='task-accept' message='Accept!' />
        <Button id='task-clarify' message='Clarify' />
      </div>
    </section>
  );
}
