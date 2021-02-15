import React from 'react';
import TextBox from '../TextBox';
import Button from '../Button';
import '../TaskItem/TaskItem.scss';
import useApplicationData from '../../hooks/useApplicationData';

export default function Show (props) {
  const { state } = useApplicationData();
  return (
    <div id="show-wrapper">
   <TextBox message={props.title} />
   <p>{props.description}</p>
   <p>Estimated time: {props.time_to_complete}</p>
   <div id="button-group" >
   <Button id="task-accept" message="Accept!" />
   <Button id="task-clarify" message="Clarify" />
   </div>
  </div>
  )
}