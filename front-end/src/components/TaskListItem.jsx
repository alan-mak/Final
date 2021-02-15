import React from 'react';
import Button from '../components/Button';
import '../components/tasks.scss';


export default function TaskListItem (props) {
  return (
    <div className="task-item">
    <a>
      <li>{props.name}
        <p>{props.description}</p>
        <p>{props.setter}</p>
        <Button message="Accept!"/>
        <Button message="Clarify!"/>
      </li>
    </a>
    </div>
  )
}