import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir categoria y noticias
  const [ categoria, guardarCategoria ] =  useState('');
  const [ noticias, guardarNoticias ] = useState([]);


  useEffect(() => {
    const consultarAPI = async () => {
      const url = 
      `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=955a25a2154d4f70b7c88a40667ee0a8`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);


    }

    consultarAPI();

  }, [categoria]);


  return (
    <Fragment>
      <Header 
        titulo = "Buscador de Noticias"
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>

      <ListadoNoticias 
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
