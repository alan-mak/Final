import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';
import TextBox from '../TextBox';

export default function AfterLogin() {

  return (
    <div id="afterlogin">
    <Button id="help-button" message="I need Help!" />
    <div id="separator"></div>
    <Button id="help-button" message="I Want To Help!" />
    <TextBox message="Welcome to HelpMeHelpYou, a modern solution for traditional problems." />
    <TextBox message=" Strengthening and bringing communities together through the humane use of technology" />
    </div>
  )
}