import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { favoritosContext, proyectosContext } from "../context/context";
import MyCard from "./Card";


const MisCreaciones = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);

    return (
        <div id="body">
        <Row><Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', fontSize: 'xx-large', fontWeight: 'bold', padding: '0px', alignItems: 'center' }}><p style={{ color: 'white' }}>Todos los proyectos</p></Col></Row>
        <Row md='auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0px', alignItems: 'center',marginBottom:'5%'}}>
            {proyectosC.proyectos.map(proyecto => 
                <Col className="col" key={proyecto.title}><MyCard proyecto={proyecto}></MyCard></Col>
            )}
        </Row>
        </div>
    )

}

export default MisCreaciones;