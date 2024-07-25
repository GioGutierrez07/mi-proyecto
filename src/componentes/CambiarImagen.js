//Importa la biblioteca React, que es necesaria para trabajar con componentes funcionales y JSX.
// permite agregar estado a componentes funcionales.
import React, { useState } from 'react'; 

//useState: Hook que permite agregar estado local a componentes funcionales.
// En este caso, imagen es el estado y setImagen es la función para actualizar ese estado.
function CambiarImagen() {
  const [imagen, setImagen] = useState('imagen1.jpg'); // Estado inicial para la ruta de la imagen

  /**
   * Función para cambiar la imagen mostrada.
   * Alterna entre 'imagen1.jpg' y 'imagen2.jpg'.
   */

  const cambiarImagen = () => {
    setImagen(imagen === 'imagen1.jpg' ? 'imagen2.jpg' : 'imagen1.jpg'); // Alterna la imagen
  };
  //dentro de return 
// Renderiza una imagen con la ruta especificada en el estado imagen
// el boton al dar clic ejecuta la funcion cambiarimagen para alternar 
  return (
    <div>
      <img src={imagen} alt="Imagen" /> 
      <button onClick={cambiarImagen}>Cambiar Imagen</button>
    </div>
  );
}
//exporta el componente 
export default CambiarImagen;
