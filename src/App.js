// importaciones
// carpeta componentes  se utilizan en app
import React from 'react'; //Se importa para poder usar JSX y crear componentes funcionales.
import Titulo from './componentes/titulo';  // se importan los componentes personalizados que tenemos 
import Parrafo from './componentes/parrafo';
import Imagen from './componentes/imagen';
//imports practica 2
import Contador from './componentes/Contador'; //importa el componente contador desde la carpeta componentes 
import CambiarImagen from './componentes/CambiarImagen'; //importa cambiarimagen desde la carpeta componentes
import CambiarColorFondo from './componentes/CambiarColorFondo'; //importa cambiarfondo desde la carpeta 
//imports practica 3
import ToastButton from './componentes/ToastButton'; // Importa el componente ToastButton
import ModalButton from './componentes/ModalButton'; // Importa el componente ModalButton
import CustomCarousel from './componentes/CustomCarousel'; // Importa el componente CustomCarousel
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para usarlos en los componentes
import'./styles.css'; // Importa el archivo de estilos CSS


// app es un componente que actua como el componente principal
function App() {
//define los estilos en linea para el contenedor principal 
  const estiloGeneral = { 
   // backgroundColor: '#f0f0f0', //establece color practica 1
    padding: '50px', // agrega espacio al rededor del contenido 
  };
//practica 1 
  return ( //devuelve un elemento con los estilos definidos en estilogeneral 
    <div style={estiloGeneral}> 
    {/**   <Titulo texto="Hola, Mundo!" tipoFuente="Arial" tamañoTexto="32px" color="blue" /> */}
     {/** <Parrafo texto="Este es un párrafo de ejemplo." tipoFuente="Times New Roman" tamañoTexto="18px" color="black" /> */}
     {/** <Imagen src="/imagen.jpg" alt="Descripción de la imagen" tipoFuente="Comic Sans MS" tamañoTexto="14px" color="red" /> */}
      

 {/**practica 2 */}
     {/* <h1>Ejemplo de useState y useEffect</h1> */}
      {/**contador  Renderiza el componente */}
     {/* <Contador />  */}
      {/**Renderiza el componente cambiarimagen*/}
     {/* <CambiarImagen /> */}
      {/**Renderiza el componente CambiarColorFondo*/}
      {/*<CambiarColorFondo /> */}

{/**practica 3 */}
      {/* Renderiza el componente ToastButton */}
      <ToastButton />
      {/* Renderiza el componente ModalButton */}
      <ModalButton />
       {/* Renderiza el componente CustomCarousel */}
      <CustomCarousel />
    </div>
  );
}
// exporta el componente para que pueda ser  importado y utilizado 
export default App;
