import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const MyCard = (props) => {
    const navigate = useNavigate();
    let p = props.proyecto;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {p.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {p.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>{p.fecha}</Typography>
        <Button size="small" onClick={() => window.location.replace(p.url)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MyCard;
