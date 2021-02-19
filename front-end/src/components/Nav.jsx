import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
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
      {token ? (
        <Link to={'/choice'}>{body}</Link>
      ) : (
        <Link to={'#'} className='link-disabled'>
          {body}
        </Link>
      )}
      <div className='nav-right'>
        {token && (
          <Link
            to={'/'}
            onClick={() => {
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
