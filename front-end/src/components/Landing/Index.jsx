import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';
import AfterLogin from './AfterLogin';


export default function Landing(props) {
  const { mode } = useVisualMode()


  return (
    <div>
      <Button message="Login" />
      <Button message="Signup" />
      <AfterLogin />
    </div>
  )
}

