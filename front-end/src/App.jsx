import './App.scss';
import React from 'react';
import Button from './components/Button'
import Image from './components/Image'
import DropDown from './components/DropDown'
import TextBox from './components/TextBox'
import TaskList from './components/TaskList';
// import Main from './components/TaskItem/Main';
// import Show from './components/TaskItem/Show';
// import Create from './components/TaskItem/Create';

import Index from './components/Landing/Index';

import { LogSign } from "./components/Login"

import useApplicationData from './hooks/useApplicationData'
import useVisualMode from './hooks/useVisualMode';

const App = () => {
  const {
    state,
    dispatch,
    tasks
  } = useApplicationData();
  const { mode, transition } = useVisualMode()
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));
  return (
    <div className="App">
      <LogSign />
      {/* <Index transition={transition}/> */}
      <TaskList />
    </div>
  );
}



export default App;
