import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Weather from './Weather';
import handShake from '../styles/handshake.png'

import './Nav.scss';

export default function Nav(props) {
  const body = (
    <div className='logo'>
      <div>
        <img src={handShake} alt="Hand Shake" height={75} width={75}/>
      </div>
      <div className="words">
        <div>
          <span className='logo-accent'>help</  span>Me
        </div>
        <div>
          help<span className='logo-accent'>You</ span>
        </div>
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
        <div id='nav-left'>
          <div id='nav-logged-in'>Welcome {userName()}</div>
          <Weather state={props.state} getWeather={props.getWeather}/>
        </div>
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
            <Link to={'/posted'}>My Posts</Link>
            <Link to={'/tasks'}>Help Out</Link>
            <Link
              to={'/'}
              onClick={() => {
                props.setLoggedIn(null);
                sessionStorage.removeItem('token');
              }}
              >
              Log Out
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
