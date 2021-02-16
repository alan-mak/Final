import React from 'react';

import { Channel } from './Channel';
export class ChannelList extends React.Component {
  render() {
    let list = `No chats currently available`;
    if (this.props.channels) {
      list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} />) 
    }
    return (
      <div className="channel-list">
         {list} 
      </div>
    )
  }
}