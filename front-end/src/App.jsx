// React and Router imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import socketClient from 'socket.io-client';

// Components
import TaskListItem from './components/TaskListItem';
import Background from './components/Background';
import Show from './components/TaskItem/Show';
import Create from './components/TaskItem/Create';
import { Chat } from './components/Chat/Chat';
import ShowAccepted from './components/ShowAccepted';
import ShowPosted from './components/ShowPosted';
import Accepted from './components/Accepted';
import { LogSign } from './components/Login';
import AfterLogin from './components/Landing/AfterLogin';
import Nav from './components/Nav';

// Style and custom hooks
import useApplicationData from './hooks/useApplicationData';

import './App.scss';
import './components/tasks.scss';



const SERVER = 'http://localhost:3005';

const App = () => {
  const [rooms, setRooms] = useState([
    { id: 45, name: 'Global Chat', socket: [] },
  ]);
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
      createChannel(newChannel);
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
    setTasks,
    setLoggedIn,
    createChannel,
    getWeather,
    completeTask,
    cancelTask,
  } = useApplicationData();

  const parsedTaskList = state.tasks.map(task => (
    <TaskListItem
      key={task.id}
      name={task.name}
      description={task.description}
      setter={task.recipient_id}
      onClarify={handleChannelCreate}
      setRooms={setRooms}
      onAccept={acceptTask}
      userList={state.users}
      accepted={task.helper_id ? true : false}
    />
  ));

  const taskListBody = (
    <>
      <div className='task-list'>{parsedTaskList}</div>
      <Chat setRooms={setRooms} rooms={rooms} state={state} />
      <ShowAccepted tasks={state.tasks} />
    </>
  );

  return (
    <Router>
      <div className='app'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>HelpMeHelpYou</title>
        </Helmet>
        <Nav setLoggedIn={setLoggedIn} state={state} getWeather={getWeather} />
        <Switch>
          <Route path='/choice'>
            <AfterLogin />
          </Route>
          <Route path='/tasks/new'>
            <Create createTask={createTask} setTasks={setTasks} />
          </Route>
          <Route path='/:user_id/about'></Route>
          <Route
            path='/tasks/:task_id'
            render={props => (
              <Background body={<Show state={state} {...props} />} />
            )}
          />
          <Route path='/tasks'>
            {state.users.length > 0 && <Background body={taskListBody} />}
          </Route>
          <Route path='/posted'>
            <ShowPosted
              state={state}
              onCancel={cancelTask}
              onComplete={completeTask}
            />
          </Route>
          <Route path='/accepted'>
            <Accepted
              state={state}
              onClarify={handleChannelCreate}
              setRooms={setRooms}
            />
            <Chat setRooms={setRooms} rooms={rooms} state={state} />
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
