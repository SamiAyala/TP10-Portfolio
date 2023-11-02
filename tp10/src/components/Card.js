import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Card.css';
import favPre from '../favPre.png';
import favPost from '../favPost.png';
import { favoritosContext, proyectosContext } from '../context/context';
import { useContext, useEffect } from 'react';


const MyCard = (props) => {
  let p = props.proyecto.proyecto;
  const proyectosC = useContext(proyectosContext);
  const favoritosC = useContext(favoritosContext);

  useEffect(() => {
    localStorage.setItem("favoritosKey", JSON.stringify(favoritosC.favoritos));
  }, [proyectosC])

  const AgregarYEliminarfavoritos = (id) => {
    console.log("id", id);
    let auxFav = favoritosC;
    for (let i = 0; i < proyectosC.proyectos.length; i++) {
      let aux = proyectosC.proyectos[i];
      if (proyectosC.proyectos[i].proyecto.id === id) {
        if (aux.esFavorito) {
          aux.esFavorito = false;
          favoritosC.setFavoritosContext(current => current.filter(favorito => {
            return favorito.id !== id;
          }))
        } else {
          aux.esFavorito = true;
          favoritosC.setFavoritosContext([...auxFav.favoritos, { 'id': id }]);
        }
        console.log("favoritosC.favoritos", favoritosC.favoritos);
      }
    }
  }

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
        <img className='imgFav' alt='' src={props.proyecto.esFavorito ? favPost : favPre} onClick={() => AgregarYEliminarfavoritos(p.id)}></img>
      </CardActions>
    </Card>
  );
}
export default MyCard;
