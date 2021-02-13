import React from "react";

import Button from "../Button";

export class Login extends React.Component {

  constructor(props)  {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>EMAIL: </label>
          <input type="email" placeholder="MScott@dunder. com" name="email" />
        </div>
        <div className="form-group">
          <label>PASSWORD: </label>
          <input type="password" placeholder="Type Your   Password" name="password" />
        </div>
        <Button message="Log In"/>
      </form>
    )
  }
}