import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TaskListItem from './TaskListItem';
import '../components/tasks.scss';

export default function TaskList (props) {
  const { state, } = useApplicationData();
  const parsedTaskList = state.tasks.map((task) => (<TaskListItem key={task.id} name={task.name} description={task.description} setter={task.recipient_id}/>));
return (
<div className="task-list">
  {parsedTaskList}
</div>
)
}