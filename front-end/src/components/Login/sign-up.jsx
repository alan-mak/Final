import React, { useState } from 'react';

import Button from '../Button';
import './sign-up.scss';

export default function SignUp(props) {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    province: '',
    post_code: '',
  });
  const [error, setError] = useState('');

  const handleInput = event =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  function validate() {
    if (
      !input.name ||
      !input.email ||
      !input.password ||
      !input.street ||
      !input.city ||
      !input.province ||
      !input.post_code
    ) {
      setError('ERROR: Cannot be blank');
      return;
    } else {
      props.createUser(input);
    }
  }

  return (
    <div className='base-container'>
      <h2>Sign Up</h2>
      <div className='content'>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <section>{error}</section>
          <div className='form-group'>
            <label>Name </label>
            <input
              type='text'
              name='name'
              value={input.name}
              onChange={handleInput}
              autofocus='true'
            />
          </div>
          <div className='form-group'>
            <label>Email </label>
            <input
              type='email'
              name='email'
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label>Password </label>
            <input
              type='password'
              name='password'
              value={input.password}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label>Street </label>
            <input
              type='text'
              name='street'
              value={input.street}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label>City </label>
            <input
              type='text'
              name='city'
              value={input.city}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label>Province </label>
            <input
              type='text'
              name='province'
              value={input.province}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label>Postal code </label>
            <input
              type='text'
              name='post_code'
              value={input.postCode}
              onChange={handleInput}
            />
          </div>
          <Button
            type='submit'
            message='Sign Up'
            onClick={validate}
            classes='sign-up-button'
          />
        </form>
      </div>
    </div>
  );
}
