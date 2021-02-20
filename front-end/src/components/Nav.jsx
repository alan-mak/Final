import React from 'react';
import { Link } from 'react-router-dom';
import useApplicationData from '../hooks/useApplicationData';

import './Nav.scss';

export default function Nav(props) {
  const { loggedIn, setLoggedIn, state } = useApplicationData();
  const token = sessionStorage.getItem('token');

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
      {props.token ? (
        <Link to={'/choice'}>{body}</Link>
      ) : (
        <Link to={'#'} className='link-disabled'>
          {body}
        </Link>
      )}
      <div className='nav-right'>
        {props.token && (
          <Link
            to={'/'}
            onClick={() => {
              console.log('LoggedIn:', state.loggedIn);
              props.setLoggedIn(null);
              console.log('LoggedIn:', state.loggedIn);
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
