import React from 'react';
import { Link } from 'react-router-dom';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';
import TextBox from '../TextBox';

import './AfterLogin.scss';

export default function AfterLogin() {
  return (
    <div id='after-login'>
      <Link to={'/tasks/new'} className='after-login-link'>
        Help Me!
      </Link>
      <Link to={'/tasks'} className='after-login-link'>
        Help You!
      </Link>
    </div>
  );
}
