import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import MisCreaciones from './components/MisCreaciones';
import Favoritos from './components/Favoritos';
import Contacto from './components/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import favoritosContext from './context/context';
import { useEffect, useState } from 'react';

const App = () => {
  const [favoritos, setFavoritosContext] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("favoritosKey") === "undefined")
      localStorage.setItem("favoritosKey",JSON.stringify());
    const favoritosJSON = JSON.parse(localStorage.getItem("favoritosKey"));
    setFavoritosContext(favoritosJSON);
    ;
  }, [])

  return (
    <favoritosContext.Provider value={{favoritos,setFavoritosContext}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/misCreaciones' element={<MisCreaciones/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </favoritosContext.Provider>
  );
}

export default App;
