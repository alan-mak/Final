import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

// export default {
//   title: 'Button',
//   component: Button,
// };



storiesOf("Button", module)
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
  .add("I need help!", () => <Button message="I need Help!" />)
  .add("I can help!", () => <Button message="I can help!" />)
 