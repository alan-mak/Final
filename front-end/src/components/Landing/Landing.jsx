import React from 'react';
import Button from '../Button';
import useVisualMode from '../../hooks/useVisualMode';

const AFTER = "AFTER";

export default function Landing (props) {
  console.log("landing props", props);


  return (
    <div>
    <Button message="Login" onClick={props.onFinish}/>
    <Button message="Signup" />
    </div>
  )
}