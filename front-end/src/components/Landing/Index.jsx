import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AfterLogin from './AfterLogin';
import Landing from './Landing'
import Button from '../Button';
import TextBox from '../TextBox'
import '../Landing/styles.scss';
import TextBox from '../TextBox'
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
    <div class="container">
      <div>
        <TextBox message="Helpmii-HelpU connects helpful  neighbors with neighbors who need help. Signup now   and see what's up in your community. Quit being such  a slacker."/>
      </div>
    </div>
    </div>
  )
}

