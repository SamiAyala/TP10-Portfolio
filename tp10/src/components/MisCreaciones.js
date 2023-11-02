import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { favoritosContext, proyectosContext } from "../context/context";
import MyCard from "./Card";


const MisCreaciones = () => {
    const proyectosC = useContext(proyectosContext);
    const favoritosC = useContext(favoritosContext);

    return (
        <Row md='auto' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0px', alignItems: 'center',marginBottom:'5%', marginTop:'4%' }}>
            {proyectosC.proyectos.map(proyecto => 
                <Col className="col" key={proyecto.title}><MyCard proyecto={proyecto}></MyCard></Col>
            )}
        </Row>
    )

}

export default MisCreaciones;