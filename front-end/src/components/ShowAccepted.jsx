import React, { useEffect, useState } from 'react';

export default function ShowAccepted (props) {
console.log("props.tasks: ", JSON.stringify(props.tasks));
console.log('props: ', props)
 let taskList = props.tasks.map(item => {
  <li key={item.id} id={item.id}>{item.name}</li>});
  console.log("parsedprops ", taskList);
  return (
    <div id="task-div">
      <ul>
      { taskList }
      </ul>
    </div>
  )
}