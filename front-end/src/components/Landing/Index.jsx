import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';


export default function Landing(props) {
  const { mode } = useVisualMode()


  return (
    <div>
      <Button message="Login" />
      <Button message="Signup" />
    </div>
  )
}

