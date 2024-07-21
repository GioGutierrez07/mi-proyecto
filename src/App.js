// importaciones
// carpeta componentes  se utilizan en app
import React from 'react'; //Se importa para poder usar JSX y crear componentes funcionales.
import Titulo from './componentes/titulo';  // se importan los componentes personalizados que tenemos 
import Parrafo from './componentes/parrafo';
import Imagen from './componentes/imagen';

// app es un componente que actua como el componente principal
function App() {
//define los estilos en linea para el contenedor principal 
  const estiloGeneral = { 
    backgroundColor: '#f0f0f0', //establece color 
    padding: '50px', // agrega espacio al rededor del contenido 
  };

  return ( //devuelve un elemento con los estilos definidos en estilogeneral 
    <div style={estiloGeneral}> 
      <Titulo texto="Hola, Mundo!" tipoFuente="Arial" tamañoTexto="32px" color="blue" /> 
      <Parrafo texto="Este es un párrafo de ejemplo." tipoFuente="Times New Roman" tamañoTexto="18px" color="black" />
      <Imagen src="/imagen.jpg" alt="Descripción de la imagen" tipoFuente="Comic Sans MS" tamañoTexto="14px" color="red" />
    </div>
  );
}
// exporta el componente para que pueda ser  importado y utilizado 
export default App;
