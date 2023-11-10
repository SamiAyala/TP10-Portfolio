import React, { useContext } from "react";
import './Favoritos.css';
import MyCard from "./Card";
import { proyectosContext , favoritosContext } from "../context/context";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Favoritos = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);
    return favoritosC.favoritos.length===0 ?  
    <div id="body">
    <Row><Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'x-large', fontWeight: 'bold', padding: '0px', alignItems: 'center',height:'70vh' }}><p style={{ color: 'white' }}>No tiene favoritos</p></Col></Row>
    </div>
    :
    (
        <div id="body">
            <Row><Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'xx-large', fontWeight: 'bold', padding: '0px', alignItems: 'center' }}><p style={{ color: 'white' }}>Favoritos</p></Col></Row>
            <Row md='auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0px', alignItems: 'center' }}>
                {proyectosC.proyectos.map(element=>{
                    return element.esFavorito ? <Col className="col"><MyCard proyecto={element}/></Col> : <></>
                })}  
            </Row>
        </div>
    )
}

export default Favoritos;