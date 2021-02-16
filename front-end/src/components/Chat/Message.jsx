import React from 'react';

export class Message extends React.Component {
  render () {
    return (
      <div className="message-item">
        <span>{this.props.text}</span>
      </div>
    )
  }
}