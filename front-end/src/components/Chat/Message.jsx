import React from 'react';

export class Message extends React.Component {
  render () {
    return (
      <div className="message-item">
        <span className="sender-identifier">{this.props.senderName.slice(0, 3)}: </span> <span className="message-content"> {this.props.text}</span>
      </div>
    )
  }
}