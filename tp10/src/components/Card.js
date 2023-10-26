import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Card.css';
import favPre from '../favPre.png';
import favPost from '../favPost.png';


const MyCard = (props) => {
  let p = props.proyecto;

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={p.imagenes}
        title="green iguana"
      />
      <CardContent className='cardContent'>
        <Typography gutterBottom variant="h5" component="div">
          {p.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {p.descripcion}
        </Typography>
      </CardContent>
      <CardActions className='cardContent'>
        <Typography>{p.fecha}</Typography>
        <Button size="small" onClick={() => window.location.replace(p.url)}>Github</Button>
        <img className='imgFav' alt='' src={favPre}></img>
      </CardActions>
    </Card>
  );
}
export default MyCard;
