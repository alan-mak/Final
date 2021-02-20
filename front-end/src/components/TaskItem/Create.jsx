import React from 'react';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import Button from '../Button';
import Background from '../Background';

import './Create.scss';
import { useHistory } from 'react-router-dom';

export default function Create(props) {
  const [state, setState] = useState({
    title: '',
    description: '',
    duration: 0,
  });

  const token = sessionStorage.getItem('token')
  const userID = jwt_decode(token, { header: true })

  let history = useHistory();

  const body = (
    <div id='create-container'>
      <h1>What would you like help with?</h1>
      <form id='task-wrapper' onSubmit={event => event.preventDefault()}>
        <div className='form-group'>
          <label for='task-title'>Title of task</label>
          <input
            id='task-title'
            type='text'
            name='name'
            value={state.title}
            onChange={event =>
              setState(prev => ({ ...prev, title: event.target.value }))
            }
          />
        </div>
        <div className='form-group'>
          <label for='task-description'>
            Please fill out any details concerning your task
          </label>
          <textarea
            id='task-description'
            value={state.description}
            name='description'
            onChange={event =>
              setState(prev => ({ ...prev, description: event.target.value }))
            }
          />
        </div>
        <div className='form-group'>
          <label for='task-time'>Estimate of task duration in minutes</label>
          <input
            id='task-time'
            type='number'
            name='time'
            // value={state.duration}
            onChange={event =>
              setState(prev => ({ ...prev, duration: event.target.value }))
            }
          />
        </div>
        <Button
          message='Post Task!'
          classes='create-button'
          onClick={() =>
            props.createTask(state.title, state.description, state.duration, userID.user_id)
            .then(() => history.push('/tasks'))
          }
        />
      </form>
    </div>
  );
  return <Background body={body} />;
}
