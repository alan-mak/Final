import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AfterLogin from './AfterLogin';
import Landing from './Landing'
import Button from '../Button';
import TextBox from '../TextBox'
import '../Landing/styles.scss';
const LANDING = "LANDING";
const AFTER = "AFTER";

export default function Index(props) {
  console.log('index props', props);
  const { mode, transition } = useVisualMode(
    LANDING
  )

  return (
    <div>
      {mode === AFTER && 
       <AfterLogin />}
    </div>
  )
}

