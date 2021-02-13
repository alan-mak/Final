import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AfterLogin from './AfterLogin';
import Landing from './Landing'
import '../Landing/styles.scss';

const LANDING = "LANDING";
const AFTER = "AFTER";
import Button from '../Button';
import TextBox from '../TextBox'

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
    <div class="container">
      <div>
        <TextBox textbox="Helpmii-HelpU connects helpful  neighbors with neighbors who need help. Signup now   and see what's up in your community. Quit being such  a slacker."/>
      </div>
    </div>
  )
}

