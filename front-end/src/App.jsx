import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import socketClient from 'socket.io-client';

import React, { useState } from 'react';
import Button from './components/Button';
import Image from './components/Image';
import DropDown from './components/DropDown';
import TextBox from './components/TextBox';
import TaskList from './components/TaskList';
import TaskListItem from './components/TaskListItem';
// import Main from './components/TaskItem/Main';
import Show from './components/TaskItem/Show';
import Create from './components/TaskItem/Create';
import { Chat } from './components/Chat/Chat';

import { LogSign } from './components/Login';

import useApplicationData from './hooks/useApplicationData';
import useVisualMode from './hooks/useVisualMode';

import './App.scss';
import AfterLogin from './components/Landing/AfterLogin';
import Nav from './components/Nav';

const SERVER = 'http://localhost:8080';
const App = () => {
  const [rooms, setRooms] = useState([]);
  const socket = socketClient(SERVER);
  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
    //         io.on("connection", socket => {
    //   socket.on("private message", (anotherSocketId, msg) => {
    //     socket.to(anotherSocketId).emit("private message", socket.id, msg);
    //   });
    // });
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
      // channels.push(newChannel);
      console.log('after Channel push: ', newChannel);
      setRooms([...rooms, newChannel]);
    }
  };

  const { state, dispatch, createUser, loginUser } = useApplicationData();
  const { mode, transition } = useVisualMode();
  const parsedTaskList = state.tasks.map(task => (
    <TaskListItem
      key={task.id}
      name={task.name}
      description={task.description}
      setter={task.recipient_id}
      onAccept={handleChannelCreate}
      setRooms={setRooms}
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
      <div className='app'>
        <Nav />
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
            <div className='task-list'>{parsedTaskList}</div>
            <Chat setRooms={setRooms} rooms={rooms} />
          </Route>
          <Route path='/'>
            <LogSign createUser={createUser} loginUser={loginUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
