import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
};

    return (
        //las `` en JS sirven para crear plantillas literales, para insertar código js en la plantilla literal se utiliza ${}
        <div 
          className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
          //función anonima, función flecha que solo se llama una vez
          onClick={() => props.manejarClic(props.children)}>
          {props.children}
        </div>
    );
}

export default Boton;
