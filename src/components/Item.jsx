import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';

const Item = ({data, inicial, max, onAdd}) => {

    const [count, setCount] = useState(inicial)
  
    const sumar = () => {
        count < max ? setCount(count + 1) : alert('No se pueden agregar mas productos')
    }
  
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No podes quitar mas productos')
    }
  
    const reset = () => {
        setCount(inicial)
    }

  return (
        <Card sx={{ maxWidth: 420 }} key={data.name}>

        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            src={data.img}
            alt="Nike1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Buzo blanco descripción.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography
           size="small" color="primary"
          >
          {data.price}
          <div>
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            <button onClick={reset}>Borrar Carrito</button>
          </div>
          </Typography>
        </CardActions>
      </Card>
  )
}



export default Item