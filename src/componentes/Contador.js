//import React: Importa la biblioteca React para poder utilizar JSX y crear componentes funcionales.
//useState: Hook de React que permite agregar estado a componentes funcionales.
import React, { useState } from 'react';

//function Contador(): Define un componente funcional llamado Contador
function Contador() {
    //useState: Hook que permite agregar estado local a componentes funcionales. 
  const [contador, setContador] = useState(0); // Estado inicial para el contador, iniciado en 0
 /**
   * Función para incrementar el contador en uno.
   */
  const incrementar = () => {
    setContador(contador + 1); // Actualiza el estado del contador incrementándolo en uno
  };

  //<p>Contador: {contador}</p>: Muestra el valor actual del contador.
  //boton al hacer clic incrementa el numero 
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
//exporta el componente
export default Contador;
