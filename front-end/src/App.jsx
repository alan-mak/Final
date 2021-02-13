import './App.css';
import React from 'react';
import Button from './components/Button'
import Image from './components/Image'
import DropDown from './components/DropDown'
import TextBox from './components/TextBox'
import Landing from './components/Landing/Index';
import { Login } from "./components/Login"
import useApplicationData from './hooks/useApplicationData'

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));
  return (
    <div className="App">
      <h1>Only Grans</h1>
      <Landing />
      <Login />
    </div>
  );
}

export default App;
