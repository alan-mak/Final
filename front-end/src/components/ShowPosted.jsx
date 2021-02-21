import React from 'react';
import Background from './Background';

export default function ShowPosted(props) {
  const body = (
    <div>I am show posted</div>
  )
  return (
    <Background body={body} />
  )
}