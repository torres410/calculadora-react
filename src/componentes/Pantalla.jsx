import React from "react";
import '../hojas-de-estilo/Pantalla.css';

//Ejemplo de definir componente como una función flecha
const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
);

export default Pantalla;
