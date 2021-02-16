import React from 'react';

export class Channel extends React.Component {
  render() {
    return (
      <div className="channel-item">
      <div>{this.props.name}</div>
      </div>
    )
  }
}