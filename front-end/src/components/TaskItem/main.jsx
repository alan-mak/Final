import React from 'react';
import Create from'./Create';
import Edit from './Edit';
import Show from './Show';


import '../TaskItem/TaskItem.scss';


export default function Main() {
  return (
    <div>
      <Create />
      <Show />
      <Edit />
    </div>
  )
}