import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import socketClient from 'socket.io-client';

import React, { useState } from 'react';
import Button from './components/Button';
import Image from './components/Image';
import DropDown from './components/DropDown';
import TextBox from './components/TextBox';
import TaskList from './components/TaskList';
import TaskListItem from './components/TaskListItem';
import Background from './components/Background';
// import Main from './components/TaskItem/Main';
import Show from './components/TaskItem/Show';
import Create from './components/TaskItem/Create';
import { Chat } from './components/Chat/Chat';
import ShowAccepted from './components/ShowAccepted';

import { LogSign } from './components/Login';

import useApplicationData from './hooks/useApplicationData';
import useVisualMode from './hooks/useVisualMode';

import './App.scss';
import './components/tasks.scss';

import AfterLogin from './components/Landing/AfterLogin';
import Nav from './components/Nav';

const SERVER = 'http://localhost:3005';

const App = () => {
  const [rooms, setRooms] = useState([]);
  const socket = socketClient(SERVER);

  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
  });

  const handleChannelCreate = (id, name) => {
    console.log('clicked');
    if (rooms.length < 1) {
      let channels = [];
      let newChannel = { id: id, name: name, socket: [] };
      channels.push(newChannel);
      setRooms(channels);
    } else {
      let newChannel = { id: id, name: name, socket: [] };
      console.log('after Channel push: ', newChannel);
      setRooms([...rooms, newChannel]);
    }
  };

  const {
    state,
    dispatch,
    createUser,
    loginUser,
    acceptTask,
    accepted,
    createTask,
    setLoggedIn,
  } = useApplicationData();
  const { mode, transition } = useVisualMode();

  const userList = state.users.map(user => user);

  const parsedTaskList = state.tasks.map(task => (
    <TaskListItem
      key={task.id}
      name={task.name}
      description={task.description}
      setter={task.recipient_id}
      onAccept={handleChannelCreate}
      setRooms={setRooms}
      onTake={acceptTask}
      userList={userList}
      accepted={task.helper_id ? true : false}
    />
  ));

  const taskListBody = (
    <>
      <div className='task-list'>{parsedTaskList}</div>
      <Chat setRooms={setRooms} rooms={rooms} />
      <ShowAccepted tasks={accepted} />
    </>
  );

  return (
    <Router>
      <div className='app'>
        <Nav setLoggedIn={setLoggedIn} loggedIn={state.loggedIn} />
        <Switch>
          <Route path='/choice'>
            <AfterLogin />
          </Route>
          <Route path='/tasks/new'>
            <Create createTask={createTask} />
          </Route>
          <Route path='/:user_id/about'></Route>
          <Route path='/tasks/:task_id'>
            <Show />
          </Route>
          <Route path='/tasks'>
            <Background body={taskListBody} />
          </Route>
          <Route path='/'>
            <LogSign
              createUser={createUser}
              loginUser={loginUser}
              setLoggedIn={setLoggedIn}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
