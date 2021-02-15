import React from 'react';

export default function TaskListItem (props) {
  return (
    <a>
      <li>{props.name}
        <p>{props.description}</p>
      </li>
    </a>
  )
}