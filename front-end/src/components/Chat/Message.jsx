import React from 'react';

export class Message extends React.Component {
  render () {
    return (
      <div className="message-item">
        <div>{this.props.senderName}</div>
        <span>{this.props.text}</span>
      </div>
    )
  }
}