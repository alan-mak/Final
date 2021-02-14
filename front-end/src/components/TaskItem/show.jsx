import React from 'react';
import TextBox from '../TextBox';
import Button from '../Button';
import '../TaskItem/TaskItem.scss'

export default function Show (props) {
  return (
    <div id="show-wrapper">
   <TextBox message={props.title} />
   <p>{props.description}</p>
   <p>Estimated time: {props.time_to_complete}</p>
   <div id="button-group" >
   <Button message="Accept!" />
   <Button message="Clarify" />
   </div>
  </div>
  )
}