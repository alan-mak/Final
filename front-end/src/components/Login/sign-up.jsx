import React from "react";

import Button from "../Button";
import "./sign-up.scss"

export class SignUp extends React.Component {

  constructor(props)  {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.baseRef}>
        <h1>Sign Up</h1>
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
            <div className="form-group">
              <label>CONFIRM PASSWORD: </label>
              <input type="password" placeholder="Re-Enter Your Password" name="confPassword" />
            </div>
            <Button message="Sign Up"/>
          </form>
        </div>
      </div>
    )
  }
}