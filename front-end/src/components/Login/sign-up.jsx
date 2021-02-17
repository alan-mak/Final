import React, { useState } from "react";

import Button from "../Button";
import "./sign-up.scss"

export default function SignUp(props) {

  const [input, setInput] = useState({
    name:"",
    email:"",
    password:"",
    street:"",
    city:"",
    province:"",
    post_code:"",
  });
  const [error, setError] = useState([]);

  const handleInput = event => setInput({
    ...input,
    [event.currentTarget.name]: event.currentTarget.value
  });
  
  function validate() {
      props.createUser(input).then(res => {
        // console.log(res.data.errors)
        if (res.data.status === 500) {
          console.log(res.data.errors)
          for (let [key, value] of Object.entries(res.data.errors)){
            setError(prev => ([...prev, value.map(x => <li>{(key.toUpperCase() + " " + x)}</li>)]))
          }
        }
      }).catch(err => console.log(err))
  };

  return (
    <div className="base-container" >
      <h1>Sign Up</h1>
      <div className="content">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <section>{error}</section>
          <div className="form-group">
            <label>NAME: </label>
            <input
            type="text"
            placeholder="Michael Scott"
            name="name"
            value={input.name}
            onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>EMAIL: </label>
            <input
            type="email"
            placeholder="MScott@dunder.com"
            name="email"
            value={input.email}
            onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>PASSWORD: </label>
            <input
            type="password"
            placeholder="Type Your Password"
            name="password"
            value={input.password}
            onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>STREET: </label>
            <input
            type="text"
            placeholder="123 Street"
            name="street"
            value={input.street}
            onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>CITY: </label>
            <input
            type="text"
            placeholder="Toronto"
            name="city"
            value={input.city}
            onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label>PROVINCE: </label>
            <input type="text"
            placeholder="Ontario"
            name="province"
            value={input.province}
            onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label>POSTAL CODE: </label>
            <input
            type="text"
            placeholder="A1B2C3"
            name="post_code"
            value={input.postCode}
            onChange={handleInput}/>
          </div>
          <Button type="submit" message="Sign Up" onClick={validate}/>
        </form>
      </div>
    </div>
  )
}