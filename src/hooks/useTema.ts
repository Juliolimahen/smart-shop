import { useState } from 'react';

const useTema = () => {
  const [tema, setTema] = useState(true);
  const alternarTema = () => setTema(prev => !prev);

  return { tema, alternarTema };
};

export default useTema;
