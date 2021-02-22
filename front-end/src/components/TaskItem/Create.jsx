import React, { useCallback } from 'react';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import Button from '../Button';
import Background from '../Background';
import { useHistory } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';

import './Create.scss';

export default function Create(props) {
  const [state, setState] = useState({
    title: '',
    description: '',
    duration: 0,
    error: '',
  });

  const token = sessionStorage.getItem('token');
  const userID = jwt_decode(token);

  const history = useHistory();

  const autoFocus = useCallback(el => (el ? el.focus() : null), []);

  const validate = () => {
    setState(prev => ({ ...prev, error: '' }));
    if (state.title && state.description && state.duration) {
      props
        .createTask(
          state.title,
          state.description,
          state.duration,
          userID.user_id
        )
        .then(res => {
          props.setTasks(res.data);
          history.push(`/tasks/${res.data.id}`);
        });
    } else {
      setState(prev => ({ ...prev, error: 'Please fill in each field' }));
    }
  };

  const body = (
    <div id='create-container'>
      <h1>What would you like help with?</h1>
      <SlideDown className={'my-dropdown-slidedown'}>
        {state.error && <h2 id='create-error-message'>{state.error}</h2>}
      </SlideDown>
      <form id='task-wrapper' onSubmit={event => event.preventDefault()}>
        <div className='form-group'>
          <label htmlFor='task-title'>Title of task</label>
          <input
            id='task-title'
            type='text'
            name='name'
            value={state.title}
            ref={autoFocus}
            onChange={event =>
              setState(prev => ({
                ...prev,
                error: '',
                title: event.target.value,
              }))
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='task-description'>
            Please fill out any details concerning your task
          </label>
          <textarea
            id='task-description'
            value={state.description}
            name='description'
            onChange={event =>
              setState(prev => ({
                ...prev,
                error: '',
                description: event.target.value,
              }))
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='task-time'>
            Estimate of task duration in minutes
          </label>
          <input
            id='task-time'
            type='number'
            name='time'
            // value={state.duration}
            onChange={event =>
              setState(prev => ({
                ...prev,
                error: '',
                duration: event.target.value,
              }))
            }
          />
        </div>
        <Button
          message='Post Task!'
          classes='create-button'
          onClick={validate}
        />
      </form>
    </div>
  );
  return <Background body={body} />;
}
