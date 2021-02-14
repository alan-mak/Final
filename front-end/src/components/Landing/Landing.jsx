import React from 'react';
import Button from '../Button';
import useVisualMode from '../../hooks/useVisualMode';

const AFTER = "AFTER";

export default function Landing (props) {


  return (
    <div>
    <Button id="login-button" message="Login" onClick={props.onFinish}/>
    <Button id="signup-button" message="Signup" />
    </div>
  )
}