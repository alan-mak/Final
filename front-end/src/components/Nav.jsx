import React from 'react';
import classNames from 'classnames/bind';

import './Nav.scss';

export default function Nav(props) {
  return (
    <section>
      <a href='#'>
        <div className={classNames('logo')}>
          <div>
            <span className={classNames('logo-red')}>help</span>Me
          </div>
          <div>
            help<span className={classNames('logo-red')}>You</span>
          </div>
        </div>
      </a>
      <div className={classNames('nav-right')}>
        <a href='#'>Sign up</a>
        <a href='#'>Log in</a>
      </div>
    </section>
  );
}
