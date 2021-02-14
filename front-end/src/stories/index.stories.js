import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../index.scss';
import '../components/Landing/styles.scss';

import Button from '../components/Button';
import Nav from '../components/Nav';

// import Show from '../components/TaskItem/Show'

import { LogSign } from "../components/Login"



// export default {
//   title: 'Button',
//   component: Button,
// };

storiesOf('Button', module)
  // .addParameters({
  //   backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  .add("Login", () => <Button
    message="Login?"
    onConfirm={action("onLogin")}
    />)
  .add("Signup", () => <Button 
    message="signup"
    onConfirm={action("onSignup")
    }/>)
  .add("I need help!", () => <Button id="help-button" message="I need Help!" />)
  .add("I can help!", () => <Button id="help-button" message="I can help!" />)



  // storiesOf('TaskItem', module)
  // .add('Show', () => <Show 
  // title="Shovel my driveway plz"
  // description="My eyes are dim. I cannot see. My eyesight is bad. My eyes are poor. My nose is knackered."
  // time_to_complete="50"
  // />)

  
 


storiesOf('Nav', module)
  .add('Nav', () => <Nav />);

storiesOf('Login Signup', module)
  .add('Sign Up/Login', () => <LogSign />)

