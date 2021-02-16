import React from 'react';
import { Link } from 'react-router-dom';

import './AfterLogin.scss';

export default function AfterLogin() {
  return (
    <div id='after-login'>
      <div id='color-overlay'>
        <section id='after-login-links-container'>
          <h1>What would you like to do today?</h1>
          <div id='after-login-links'>
            <Link to={'/tasks/new'} className='after-login-link'>
              I Need Help!
            </Link>
            <Link to={'/tasks'} className='after-login-link'>
              I Can Help!
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
