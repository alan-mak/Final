import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav(props) {
  return (
    <section>
      <Link to={'/choice'}>
        <div className={classNames('logo')}>
          <div>
            <span className={classNames('logo-red')}>help</span>Me
          </div>
          <div>
            help<span className={classNames('logo-red')}>You</span>
          </div>
        </div>
      </Link>
      <div className={classNames('nav-right')}>
        <Link to={'/choice'}>Log in</Link>
      </div>
    </section>
  );
}
