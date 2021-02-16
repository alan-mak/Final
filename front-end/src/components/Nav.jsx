import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav(props) {
  return (
    <section id='nav-section'>
      <Link to={'/choice'}>
        <div className='logo'>
          <div>
            <span className='logo-red'>help</span>Me
          </div>
          <div>
            help<span className='logo-red'>You</span>
          </div>
        </div>
      </Link>
      <div className='nav-right'>
        <Link to={'/choice'}>Log in</Link>
      </div>
    </section>
  );
}
