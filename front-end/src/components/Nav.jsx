import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Weather from './Weather'

import './Nav.scss';

export default function Nav(props) {
  const body = (
    <div className='logo'>
      <div>
        <span className='logo-accent'>help</span>Me
      </div>
      <div>
        help<span className='logo-accent'>You</span>
      </div>
    </div>
  );

  // Get user's name from the token of logged in user
  const userName = () => {
    const userID = jwt_decode(props.state.loggedIn).user_id;
    const user = props.state.users.find(user => user.id === userID);
    return user && user.name;
  };

  return (
    <section id='nav-section'>
      {
        (props.state.users.length > 0 && props.state.loggedIn) &&
        <Weather state={props.state} getWeather={props.getWeather}/>
      }

      {props.state.loggedIn ? (
        <Link to={'/choice'}>{body}</Link>
        ) : (
          <Link to={'#'} className='link-disabled'>
          {body}
        </Link>
      )}

      <div id='nav-right'>
        {props.state.loggedIn && (
          <>
            <div id='nav-logged-in'>Welcome {userName()}</div>
            <Link
              to={'/'}
              onClick={() => {
                props.setLoggedIn(null);
                sessionStorage.removeItem('token');
              }}
              >
              Log out
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
