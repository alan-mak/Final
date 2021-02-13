import React from "react";

import Button from "../Button";
import "./log-in.scss"

export class Login extends React.Component {

  constructor(props)  {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <h1>LOGIN</h1>
        <div className="content">
          <form>
            <div className="form-group">
              <label>EMAIL: </label>
              <input type="email"   placeholder="MScott@dunder.com"  name="email" />
            </div>
            <div className="form-group">
              <label>PASSWORD: </label>
              <input type="password" placeholder="Type  Your Password" name="password" />
            </div>
            <Button message="Log In"/>
          </form>
        </div>
      </div>
    )
  }
}