import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';

export default function AfterLogin() {
  return (
    <div id="afterlogin">
    <Button id="help-button" message="I need Help!" />
    <div id="separator"></div>
    <Button id="help-button" message="I Want To Help!" />
    </div>
  )
}