import React, { useEffect } from 'react';
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

  const userName = () => {
    const userID = jwt_decode(props.state.loggedIn).user_id;
    const user = props.state.users.find(user => user.id === userID);
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
      <div className='nav-right'>
        {props.state.loggedIn && (
          <>
            <h2>User ID: {userName()}</h2>
            <Link
              to={'/'}
              onClick={() => {
                console.log(
                  '***State***',
                  jwt_decode(props.state.loggedIn).user_id
                );
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
