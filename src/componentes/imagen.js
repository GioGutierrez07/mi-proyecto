import React from 'react'; //importaciones 

 //definir imagen es un componente que renderiza la imagen 
 //resive varias propiedades (props) para personalizar el estilo de la imagen y su comportamiento 
 // props src url de la imagen que mostrara 
 //alt texto alternativo para la imagen este texto se muestra cuando la imagen no cargue 
 //tipo de fuente se aplica para el texto 
 //tamañotexto el tamaño que se aplica 
 //color que se aplica 
function Imagen({ src, alt, tipoFuente, tamañoTexto, color }) {
  const estilo = {
    fontFamily: tipoFuente, //aplica el tipo de fuente especificado 
    fontSize: tamañoTexto, //aplica el tamaño de texto especificado
    color: color //color especificado 
  };
//Renderiza un elemento <img> utilizando las propiedades src (fuente de la imagen)
// y alt (texto alternativo) pasadas como props.
  return <img src={src} alt={alt} style={estilo} />;
}
// exporta el componente para que pueda ser  importado y utilizado
export default Imagen;
