import React, { useContext} from "react";
import {proyectosContext,favoritosContext} from '../context/context';
import MyCard from "./Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

const Home = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);
    console.log("PROYECTOS HOME",proyectosC )
    console.log("FAVORITOS HOME", favoritosC)

    const AgregarYEliminarfavoritos = (id) => 
    {
        for (let i = 0; i <= proyectosC.proyectos.length; i++) {
            if (proyectosC.proyectos[i].proyecto.id === id) {
                proyectosC.proyectos[i].esFavorito = true;
                favoritosC.setFavoritosContext(...favoritosC, proyectosC.proyectos[i].proyecto);
                console.log("NUEVOS FAVORITOS",favoritosC)
            }   
            else if(proyectosC.proyectos[i].proyecto.id === id){
            proyectosC.proyectos[i].esFavorito = false;
            favoritosC.setFavoritosContext(
            favoritosC.favoritosC.filter(F => F.esFavorito === false )
                )
        } 
        i++
        }


        
    }
return(
    <>
    <Row><Col style={{display:'flex',flexWrap:'wrap',justifyContent:'center',fontSize:'xx-large',fontWeight:'bold',padding:'0px',alignItems:'center'}}><p style={{color:'white'}}>Bienvenido a mi </p><p className="rainbow-text">¡portfolio!</p><p style={{fontSize:'10px'}}>(hover me)</p></Col></Row>
    <Row md={4} style={{display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'0px',alignItems:'center'}}>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[0]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[9]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[1]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[2]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[3]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    <Col className="col"><MyCard proyecto={proyectosC.proyectos[4]} AgregarYEliminarfavoritos = {AgregarYEliminarfavoritos} /></Col>
    </Row>
    </>
)
}

export default Home;