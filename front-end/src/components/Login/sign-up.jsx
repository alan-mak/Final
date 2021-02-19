import React, { useState } from 'react';

import Button from '../Button';

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
  const [error, setError] = useState([]);

  const handleInput = event =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  function validate() {
    props
      .createUser(input)
      .then(res => {
        setError([]);
        if (res.data.status === 500) {
          for (let [key, value] of Object.entries(res.data.errors)) {
            setError(prev => [
              ...prev,
              value.map(x => <li>{key.toUpperCase() + ' ' + x}</li>),
            ]);
          }
        } else {
          sessionStorage.setItem("token", res.data.jwt)
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='base-container'>
      <h1>Sign up</h1>
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
            message='Sign up'
            onClick={validate}
            classes='sign-up-button'
          />
        </form>
      </div>
    </div>
  );
}
