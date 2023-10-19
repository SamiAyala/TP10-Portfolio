import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import {proyectosContext,favoritosContext} from '../context/context';
import MyCard from "./Card";
import {Row , Col } from 'react-bootstrap'

const Home = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);


return(
    <Row>
    <Col><MyCard proyecto={proyectosC.proyectos[0]}/></Col>
    <Col><MyCard proyecto={proyectosC.proyectos[9]}/></Col>
    <Col><MyCard proyecto={proyectosC.proyectos[1]}/></Col>
    <Col><MyCard proyecto={proyectosC.proyectos[2]}/></Col>
    <Col><MyCard proyecto={proyectosC.proyectos[3]}/></Col>
    <Col><MyCard proyecto={proyectosC.proyectos[4]}/></Col>
    
    </Row>
)
}

export default Home;