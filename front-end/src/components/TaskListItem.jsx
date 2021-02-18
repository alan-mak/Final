import React, { useState } from 'react';
import Button from '../components/Button';

import Maps from './Maps'
import Textbox from '../components/TextBox';
import '../components/tasks.scss';


export default function TaskListItem (props) {
  const [accepted, setAccepted] = useState(false);
  const takeTask = function () {
    setAccepted(true);
    props.onTake(props.setter, 1);
  }
  return (
    <div className="task-item">
      <li>{props.name}
        <p>{props.description}</p>
        <p>{props.setter}</p>
        <Maps />
        <Button message="Accept!" onClick={() => props.onTake(props.setter, 1)}/>
        <Button message="Clarify!" onClick={() => props.onAccept(props.setter, props.name)}/>
        {accepted && <Textbox message="You accepted this task! Click Clarify to contact the poster!"/>}
        {!accepted &&  <Button message="Accept!" onClick={takeTask}/> }
        <Button message="Clarify!" onClick={() => props.onAccept(props.setter, props.name)}/> 
      </li>
    </div>
  )
}