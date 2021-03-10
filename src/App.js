import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

export default class App extends Component {
  state = {
    termino: "",
    imagenes: [],
  };

  consultarApi = () => {
    const termino = this.state.termino;

    const url = `https://pixabay.com/api/?key=17240942-95de02b1a44f80545592ff26d&q=${termino}$per_page=30`;

    fetch(url)
      .then((respuesta) => respuesta.json())

      .then((resultado) => {
        console.log(resultado);
        this.setState({ imagenes: resultado.hits });
      });
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado imagenes={this.state.imagenes} />
      </div>
    );
  }
}
