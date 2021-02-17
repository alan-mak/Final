import React from 'react';
import Button from '../components/Button';
import '../components/tasks.scss';


export default function TaskListItem (props) {
  return (
    <div className="task-item">
      <li>{props.name}
        <p>{props.description}</p>
        <p>{props.setter}</p>
        <Button message="Accept!" onClick={() => props.onTake(props.setter, 1)}/>
        <Button message="Clarify!" onClick={() => props.onAccept(props.setter, props.name)}/>
      </li>
    </div>
  )
}