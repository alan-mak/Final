import React, { userState } from "react";

import Button from "../Button";
import "./log-in.scss"

export default function Login(props){

  const [input, setInput] = useState({
    email:"",
    password:""
  })
  const [error, setError] = useState("");

  const handleInput = event => setInput({
    ...input,
    [event.currentTarget.name]: event.currentTarget.value
  });

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