import React from 'react';
import "./Button.scss"

const classNames = require('classnames');

export default function Button (props) {
  let buttonClass = classNames("button")
  console.log(props)
  return (

    <button 
      className={buttonClass}
      onClick={props.onClick}
      id={props.id}
    >
      {props.message}
    </button>

  )
}