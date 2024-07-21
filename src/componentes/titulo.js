import React from 'react'; //Se importa para poder usar JSX y crear componentes funcionales en React

//contenido del encabezado se muestra dentro del elemento  <h1>
//tipo de fuente se aplica al texto del encabezado 
//tamaño de texto del encabezado es una unidad valida   como 32px
//color del encabezado 
function Titulo({ texto, tipoFuente, tamañoTexto, color }) { // titulo es un componente que renderiza un encabezado 
  const estilo = {
    fontFamily: tipoFuente, //aplica el tipo de fuente especificado
    fontSize: tamañoTexto, //aplica el tamaño de texto especificado
    color: color //color especificado
  };
//Renderiza un elemento <h1> que muestra el contenido del texto prop.
//aplica estilos definidos en estilo 
  return <h1 style={estilo}>{texto}</h1>;
}
//exporta componente titulo 
export default Titulo;
