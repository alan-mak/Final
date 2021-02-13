import { useState } from 'react';

export default function useVisualMode(inputMode){

  const [mode, setMode] = useState(inputMode);

  function transition(input) {
    setMode(input);
    console.log('clicked');
  };


  return { mode, transition }
}