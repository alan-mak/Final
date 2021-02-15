import React from "react";

import Button from "../Button";
import "./log-in.scss"

export default function Login(props){

  return (
    <div className="base-container">
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