import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TaskListItem from './TaskListItem';

export default function TaskList (props) {
  const { state, } = useApplicationData();
  const parsedTaskList = state.tasks.map((task) => (<TaskListItem key={task.id} name={task.name} description={task.description} />));
return (
<div>
  {parsedTaskList}
</div>
)
}