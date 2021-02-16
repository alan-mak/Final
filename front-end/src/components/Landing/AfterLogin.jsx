import React from 'react';
import { Link } from 'react-router-dom';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';
import TextBox from '../TextBox';

import './AfterLogin.scss';

export default function AfterLogin() {
  return (
    <div id='afterlogin'>
      <Link to={'/tasks/new'}>Help Me!</Link>
      <Link to={'/tasks'}>Help You!</Link>
    </div>
  );
}
