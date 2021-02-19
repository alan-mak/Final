import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import './log-in.scss';

export default function Login(props) {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState([]);
  let history = useHistory();

  const handleInput = event =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  function validate() {
    setError([]);
    props
      .loginUser(input)
      .then(res => {
        if (res.data.status === 500) {
          setError(<li>{res.data.message}</li>);
        } else {
          sessionStorage.setItem('token', res.data.jwt);
          console.log('redirect');
          return history.push('/choice');
        }
      })
      .catch(err => console.log(err));
  }

  const autoFocus = useCallback(el => (el ? el.focus() : null), []);

  return (
    <div className='base-container'>
      <h1>Log in</h1>
      <div className='content'>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <section>{error}</section>
          <div className='form-group'>
            <label>Email </label>
            <input
              type='email'
              name='email'
              onChange={handleInput}
              ref={autoFocus}
            />
          </div>
          <div className='form-group'>
            <label>Password </label>
            <input type='password' name='password' onChange={handleInput} />
          </div>
          <Button
            type='submit'
            message='Log in'
            onClick={validate}
            classes={'sign-up-button'}
          />
        </form>
      </div>
    </div>
  );
}
