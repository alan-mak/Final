import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AfterLogin from './AfterLogin';
import Landing from './Landing'

const LANDING = "LANDING";
const AFTER = "AFTER";

export default function Index(props) {
  console.log('index props', props);
  const { mode, transition } = useVisualMode(
    LANDING
  )
  // {mode === EMPTY && 
  //   <Empty onAdd={() => transition(CREATE)} />}

  return (
    <div>
      {mode === LANDING &&
      <Landing onFinish={() => transition(AFTER)}/>}
      {mode === AFTER && 
       <AfterLogin />}
    </div>
  )
}

