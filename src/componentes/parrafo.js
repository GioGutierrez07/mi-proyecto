import React from 'react'; //Se importa para poder usar JSX y crear componentes funcionales en React

//contenido del parrafo, tipo de fuente aplicada , tamaño del texto del parrafo , color del texto del parrafo 
function Parrafo({ texto, tipoFuente, tamañoTexto, color }) { //componente que renderiza un elemento parrafo 
  const estilo = {
    fontFamily: tipoFuente, //aplica el tipo de fuente especificado 
    fontSize: tamañoTexto, //aplica el tamaño de texto especificado 
    color: color //color especificado 
  };
  //Renderiza un elemento <p> que muestra el contenido del texto prop
  return <p style={estilo}>{texto}</p>;
}
//exporta componente 
export default Parrafo;
