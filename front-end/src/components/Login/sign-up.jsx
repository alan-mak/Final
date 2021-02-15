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
            <div className="form-group">
              <label>STREET: </label>
              <input type="text" placeholder="123 Street" name="street" />
            </div>
            <div className="form-group">
              <label>CITY: </label>
              <input type="text" placeholder="Toronto" name="city" />
            </div>
            <div className="form-group">
              <label>PROVINCE: </label>
              <input type="text" placeholder="Ontario" name="province" />
            </div>
            <div className="form-group">
              <label>POSTAL CODE: </label>
              <input type="text" placeholder="A1B2C3" name="post_code" />
            </div>
            <Button message="Sign Up"/>
          </form>
        </div>
      </div>
    )
  }
}