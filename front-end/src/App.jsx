import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import socketClient from 'socket.io-client';

import React from 'react';
import Button from './components/Button';
import Image from './components/Image';
import DropDown from './components/DropDown';
import TextBox from './components/TextBox';
import TaskList from './components/TaskList';
import TaskListItem from './components/TaskListItem';
// import Main from './components/TaskItem/Main';
import Show from './components/TaskItem/Show';
import Create from './components/TaskItem/Create';
import Chat from './components/Chat/Chat';

import Index from './components/Landing/Index';

import { LogSign } from './components/Login';

import useApplicationData from './hooks/useApplicationData';
import useVisualMode from './hooks/useVisualMode';

import './App.scss';
import AfterLogin from './components/Landing/AfterLogin';


const SERVER = "http://localhost:8080";

const App = () => {
  const socket = socketClient(SERVER);
      socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
      });

  const { state, dispatch, createUser } = useApplicationData();
  const { mode, transition } = useVisualMode();
  const parsedTaskList = state.tasks.map(task => (
    <TaskListItem
      key={task.id}
      name={task.name}
      description={task.description}
      setter={task.recipient_id}
    />
  ));

  const userList = state.users.map(user => (
    <li key={user.id}>
      {' '}
      {user.first_name} {user.last_name} {user.email}{' '}
    </li>
  ));
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/choice'>
            <AfterLogin />
          </Route>
          <Route path='/tasks/new'>
            <Create />
          </Route>
          <Route path='/:user_id/about'></Route>
          <Route path='/tasks/:task_id'>
            <Show />
          </Route>
          <Route path='/tasks'>
            {/* <Index transition={transition}/> */}
            <div className='task-list'>{parsedTaskList}</div>
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path='/'>
            <LogSign createUser={createUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
