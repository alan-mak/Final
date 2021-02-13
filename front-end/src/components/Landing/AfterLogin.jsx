import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';

export default function AfterLogin() {
  return (
    <div id="afterlogin">
    <Button id="offer-help" message="I can Help!" />
    <Button id="get-help" message="I need Help!" />
    </div>
  )
}