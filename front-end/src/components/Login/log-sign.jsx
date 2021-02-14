import React from "react"
import { Login, SignUp } from "./index"

export class LogSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    }
  }
  changeState() {
    const { isLogin } = this.state;
    if(isLogin) {
      this.Side.classList.remove("right");
      this.Side.classList.add("left")
    } else {
      this.rightSide.classList.remove("left")
      this.rightSide.classList.add("right")
    }
  }

  render() {
    const { isLogin } = this.state;
    const current = isLogin ? "Register" : "Login";
    const currentActive = isLogin ? "login" : "signUp"
    return (
      <div className="App">
        <div className="login">
          {isLogin && <Login baseRef={(ref) => this.current = ref}/>}
          {!isLogin && <SignUp baseRef={(ref) => this.current = ref}/>}
        </div>
        <Sides current={current} baseRef={ref => this.Side = ref} onClick={this.changeState.bind(this)}/>
      </div>
    )
  }
}

const Sides = props => {
  return <div className="side" ref={props.baseRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
}
export default LogSign;