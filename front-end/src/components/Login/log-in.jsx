import React, { useState } from "react";

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

  function validate() {
    if (!input.email || !input.password) {
      setError("ERROR: Cannot be blank")
      return
    }
  }

  return (
    <div className="base-container">
      <h1>Login</h1>
      <div className="content">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <section>{error}</section>
          <div className="form-group">
            <label>EMAIL: </label>
            <input
            type="email"
            placeholder="MScott@dunder.com"
            name="email"
            onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label>PASSWORD: </label>
            <input type="password"
            placeholder="Type Your Password"
            name="password"
            onChange={handleInput}/>
          </div>
          <Button type="submit" message="Log In" onClick={validate}/>
        </form>
      </div>
    </div>
  ) 
}