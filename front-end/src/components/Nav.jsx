import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

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
    console.log(userID);
    console.log(props.state.users);
    const user = props.state.users.find(user => user.id === userID);
    console.log(user);
    return user && user.name;
  };

  return (
    <section id='nav-section'>
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
