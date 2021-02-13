import React from 'react';
import useVisualMode from '../../hooks/useVisualMode';
import AfterLogin from './AfterLogin';
import Landing from './Landing'

const LANDING = "LANDING";
const AFTER = "AFTER";

export default function Index(props) {
  const { mode, transition } = useVisualMode()


  return (
    <div>
      <Landing />
      <AfterLogin />
    </div>
  )
}

