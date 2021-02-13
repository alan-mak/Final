import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import Button from '../Button';
import TextBox from '../TextBox'

export default function Landing(props) {
  const { mode } = useVisualMode()


  return (
    <div class="container">
      <div>
        <TextBox textbox="Helpmii-HelpU connects helpful  neighbors with neighbors who need help. Signup now   and see what's up in your community. Quit being such  a slacker."/>
      </div>
      <div>
        <Button message="Login" />
        <Button message="Signup" />
      </div>
    </div>
  )
}

