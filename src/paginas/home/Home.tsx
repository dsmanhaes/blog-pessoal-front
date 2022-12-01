import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './Home.css';

function Home () {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `Clicou ${num} vezes`;

    return () => {

    }
  }, [num]);

  return (
    <>
      <h1>Você clicou {num} vezes</h1>
      <Button color='secondary' variant="contained" onClick={() => setNum(num - 1)}>
        -
      </Button>
      <Button color='secondary' variant="contained"  onClick={() => setNum(num + 1)}>
        +
      </Button>
    </>
  );
}

export { Home };
