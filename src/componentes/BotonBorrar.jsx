import React from "react";
import '../hojas-de-estilo/BotonBorrar.css';

const BotonBorrar = (props) => (
  <div 
    className="boton-borrar" 
    onClick={props.manejarBorrar}>
    {props.children}
  </div>
);

export default BotonBorrar;
