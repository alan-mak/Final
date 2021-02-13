import { useState } from 'react';

export default function useVisualMode(inputMode){

  const [mode, setMode] = useState(inputMode);

  function transition(input) {
    setMode(input);
  };


  return { mode, transition }
}