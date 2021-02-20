import React from 'react';

export class Message extends React.Component {
  render () {
    return (
      <div className="message-item">
        <span>{this.props.senderName.slice(0, 3)} says ->: {this.props.text}</span>
      </div>
    )
  }
}