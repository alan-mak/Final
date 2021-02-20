import React from 'react';
import { Link } from 'react-router-dom';
import useApplicationData from '../hooks/useApplicationData';

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

  return (
    <section id='nav-section'>
      {props.loggedIn ? (
        <Link to={'/choice'}>{body}</Link>
      ) : (
        <Link to={'#'} className='link-disabled'>
          {body}
        </Link>
      )}
      <div className='nav-right'>
        {props.loggedIn && (
          <Link
            to={'/'}
            onClick={() => {
              props.setLoggedIn(null);
              sessionStorage.removeItem('token');
            }}
          >
            Log out
          </Link>
        )}
      </div>
    </section>
  );
}
