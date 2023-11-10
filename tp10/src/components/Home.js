import React, { useContext, useEffect } from "react";
import { proyectosContext, favoritosContext } from '../context/context';
import MyCard from "./Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

const Home = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);
    console.log("PROYECTOS HOME", proyectosC)
    console.log("FAVORITOS HOME", favoritosC)

    return (
        <div id="body">
            <Row><Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'xx-large', fontWeight: 'bold', padding: '0px', alignItems: 'center' }}><p style={{ color: 'white' }}>Bienvenido a mi </p><p className="rainbow-text">¡portfolio!</p><p style={{ fontSize: '10px' }}>(hover me)</p></Col></Row>
            <Row md='auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0px', alignItems: 'center' }}>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[0]} /></Col>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[9]} /></Col>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[1]} /></Col>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[2]} /></Col>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[3]} /></Col>
                <Col className="col"><MyCard proyecto={proyectosC.proyectos[4]} /></Col>
            </Row>
        </div>
    )
}

export default Home;