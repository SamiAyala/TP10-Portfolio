import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MisCreaciones from "./components/MisCreaciones";
import Favoritos from "./components/Favoritos";
import Contacto from "./components/Contacto";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { favoritosContext, proyectosContext } from "./context/context";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [favoritos, setFavoritosContext] = useState([]);
  const [proyectos, setProyectosContext] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setFavoritosContext([]);
    if (localStorage.getItem("favoritosKey") === null) {
      localStorage.setItem("favoritosKey", JSON.stringify([]));
    }
    //Resetear localStorage:
    //localStorage.clear();
    const favoritosJSON = JSON.parse(localStorage.getItem("favoritosKey"));
    console.log("favoritosJSON",favoritosJSON);
    if (favoritosJSON === undefined || favoritosJSON === null) {
      setFavoritosContext([]);
    }else{
      setFavoritosContext(favoritosJSON);
    }
    axios.get("http://localhost:3000/DATA.json").then((res) => {
      let proyectos = [];
      res.data.proyectos.forEach(proyecto => {
        let b = false;
        b = compararId(proyecto.id, favoritosJSON);
        let esFavorito = b;
        proyectos.push({ proyecto, esFavorito });
      })
      setProyectosContext(proyectos);
      setLoading(false);
    });
  }, []);

  const compararId =  (id, favoritos) => {
    let r = false;
    favoritos.forEach((n) => {
      n.id === id ? r = true : <></>
    });
    return r;
  }

  return loading ? <></> : (
    <favoritosContext.Provider value={{ favoritos, setFavoritosContext }}>
      <proyectosContext.Provider value={{ proyectos, setProyectosContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/misCreaciones" element={<MisCreaciones />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </proyectosContext.Provider>
    </favoritosContext.Provider>
  );
};

export default App;
