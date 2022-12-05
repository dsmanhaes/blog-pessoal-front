import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home () {
  const [num, setNum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Clicou ${num} vezes`;

    if (num > 10) {
      navigate('/about');
    }

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
      <p>*Se o número passar de 10 vai redirecionar para o about.</p>
    </>
  );
}

export { Home };
