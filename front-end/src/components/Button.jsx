import React from 'react';
import "./Button.scss"

const classNames = require('classnames');

export default function Button (props) {
  let buttonClass = classNames("button")

  return (
    <button 
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.message}
    </button>
  )
}