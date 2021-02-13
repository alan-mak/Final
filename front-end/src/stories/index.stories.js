import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../index.scss';

import Button from '../components/Button';
import Nav from '../components/Nav';

// export default {
//   title: 'Button',
//   component: Button,
// };

storiesOf('Button', module)
  // .addParameters({
  //   backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  .add('Login', () => <Button message='Login?' />)
  .add('Signup', () => <Button message='signup' />)
  .add('I need help!', () => <Button message='I need Help!' />)
  .add('I can help!', () => <Button message='I can help!' />);

storiesOf('Nav', module)
  // .addParameters({
  //   backgrounds: [{ name: 'dark', value: '#222f3e', default: true }],
  // })
  .add('Nav', () => <Nav />);
