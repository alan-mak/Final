import './App.css';
import React from 'react';
import Button from './components/Button'
import Image from './components/Image'
import DropDown from './components/DropDown'
import TextBox from './components/TextBox'

import Index from './components/Landing/Index';

import { Login } from "./components/Login"

import useApplicationData from './hooks/useApplicationData'
import useVisualMode from './hooks/useVisualMode';

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();
  const { mode, transition } = useVisualMode()

  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));
  return (
    <div className="App">
      <h1>Only Grans</h1>
    
      <Index transition={transition}/>
    </div>
  );
}

export default App;
