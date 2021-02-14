import './App.css';
import React from 'react';
import Button from './components/Button'
import Image from './components/Image'
import DropDown from './components/DropDown'
import TextBox from './components/TextBox'
// import Main from './components/TaskItem/Main';
// import Show from './components/TaskItem/Show';
// import Create from './components/TaskItem/Create';

import Index from './components/Landing/Index';

import { Login, SignUp } from "./components/Login"

import useApplicationData from './hooks/useApplicationData'
import useVisualMode from './hooks/useVisualMode';

// const App = () => {
//   const {
//     state,
//     dispatch
//   } = useApplicationData();
//   const { mode, transition } = useVisualMode()

//   const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
//   ));
//   return (
//     <div className="App">
//       <h1>Only Grans</h1>
    
//       <Index transition={transition}/>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    }
  }
  changeState() {
    const { isLogin } = this.state;
    if(isLogin) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left")
    } else {
      this.rightSide.classList.remove("left")
      this.rightSide.classList.add("right")
    }
    this.setState(prevState => ({ isLogin: !prevState.isLogin }))
  }

  render() {
    const { isLogin } = this.state;
    const current = isLogin ? "SignUp" : "Login";
    const currentActive = isLogin ? "login" : "signUp"
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
          {isLogin && (
            <Login baseRef={ref => (this.current = ref)}/>
          )}
          {!isLogin && (
            <SignUp baseRef={ref => (this.current = ref)}/>
          )}
        </div>
        <RightSide 
          current={current}
          currentActive={currentActive}
          baseRef={ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)}/>
      </div>
    </div>
    )
  }
}

const RightSide = props => {
  return (
    <div className="right-side" ref={props.baseRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  )}

export default App;
