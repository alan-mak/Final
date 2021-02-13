import { useState } from 'react';

export default function useVisualMode(inputMode){

  const [mode, setMode] = useState(inputMode);


  return { mode }
}