import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';

const product = {
  title: 'Camiseta simples com logo esquisita',
  discount: 35,
  price: 20,
  potos: [
    {
      link: 'https://http2.mlstatic.com/D_NQ_NP_755187-MLB43755043781_102020-O.webp',
      alt: 'branca'
    },
    {
      link: 'https://http2.mlstatic.com/D_NQ_NP_730505-MLB43755067093_102020-O.webp',
      alt: 'vermelha'
    },
    {
      link: 'https://http2.mlstatic.com/D_NQ_NP_977681-MLB51831573348_102022-O.webp',
      alt: 'amarela'
    }
  ]
}

const style = makeStyles({
  productBox: {
    marginTop: '1rem',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 'medium'
  },
  discount: {
    fontSize: 'medium',
    textDecoration: 'line-through',
    color: red[500]
  },
  price: {
    fontSize: 'medium'
  },
  mainImage: {
    width: '100%'
  },
  smallImage: {
    width: '100%',
    marginBottom: '0.2rem'
  }
});

function Produto() {
  const classes = style();
  const { photoId } = useParams();
  const [qtd, setQtd] = useState(1);
  const [opt, setOpt] = useState(Number(photoId ?? 0));

  function setProductQtd(productQtd: number) {
    if (productQtd > 0) {
      setQtd(productQtd);
    }
  }

  return (
    <Grid container spacing={1} className={classes.productBox}>
      <Grid item xs={1}>
        <Grid container>
          <img onClick={() => setOpt(0)} className={classes.smallImage} src={product.potos[0].link} alt={product.potos[0].alt} />
          <img onClick={() => setOpt(1)} className={classes.smallImage} src={product.potos[1].link} alt={product.potos[1].alt} />
          <img onClick={() => setOpt(2)} className={classes.smallImage} src={product.potos[2].link} alt={product.potos[2].alt} />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <img className={classes.mainImage} src={product.potos[Number(opt)].link} alt={product.potos[opt].alt} />
      </Grid>
      <Grid item xs={3}>
        <h1 className={classes.title}>{product.title}</h1>
        <h2 className={classes.discount}>R${product.discount.toFixed(2)}</h2>
        <h2 className={classes.price}>R${product.price.toFixed(2)}</h2>
        <div>
          <Button onClick={() => setProductQtd(qtd - 1)}>-</Button>
          {qtd}
          <Button onClick={() => setProductQtd(qtd + 1)}>+</Button>
        </div>
        <h2 className={classes.price}>Total R${(qtd * product.price).toFixed(2)}</h2>
      </Grid>
    </Grid>
  );
}

export { Produto };
