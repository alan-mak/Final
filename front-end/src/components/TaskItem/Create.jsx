import React from 'react';
import Button from '../Button';
import Background from '../Background';

import './Create.scss';

export default function Create() {
  const body = (
    <div id='create-container'>
      <h1>What would you like help with?</h1>
      <form id='task-wrapper'>
        <div className='form-group'>
          <label for='task-title'>Title of task</label>
          <input id='task-title' type='text' name='task-title' />
        </div>
        <div className='form-group'>
          <label for='task-description'>
            Please fill out any details concerning your task
          </label>
          <textarea id='task-description' />
        </div>
        <div className='form-group'>
          <label for='task-time'>Estimate of task duration in minutes</label>
          <input id='task-time' type='number' name='task-time' />
        </div>
        <Button message='Post Task!' classes='create-button' />
      </form>
    </div>
  );
  return <Background body={body} />;
}
