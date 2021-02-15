import React from "react";

import Button from "../Button";
import "./log-in.scss"

export class Login extends React.Component {

  constructor(props)  {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.baseRef}>
        <h1>Login</h1>
        <div className="content">
          <form autoComplete="off">
            <div className="form-group">
              <label>EMAIL: </label>
              <input type="email"   placeholder="MScott@dunder.com"  name="email" />
            </div>
            <div className="form-group">
              <label>PASSWORD: </label>
              <input type="password" placeholder="Type Your Password" name="password" />
            </div>
            <Button type="submit" message="Log In"/>
          </form>
        </div>
      </div>
    )
  }
}