import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../Background';

import './AfterLogin.scss';

export default function AfterLogin() {
  const body = (
    <section id='after-login-links-container'>
      <h1 id='after-login-links-label'>How are you feeling today?</h1>
      <div id='after-login-links'>
        <Link to={'/tasks/new'} className='after-login-link'>
          I Need Help!
        </Link>
        <Link to={'/tasks'} className='after-login-link'>
          I Can Help!
        </Link>
      </div>
    </section>
  );

  return <Background body={body} />;
}
