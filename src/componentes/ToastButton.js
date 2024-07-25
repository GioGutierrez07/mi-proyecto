// src/componentes/ToastButton.js
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente
//para crear y estilizar el Toast y el botón.
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';  // Importa componentes específicos de Reactstrap

//boton que al hacer click muestre un toast 
const ToastButton = () => {
  const [showToast, setShowToast] = useState(false); // Estado para manejar la visibilidad del Toast

  // Función para alternar la visibilidad del Toast
  const toggleToast = () => setShowToast(!showToast);
//Alterna el estado de showToast entre true y false. 
//Esta función se llama cada vez que se hace clic en el botón de mostrar/cerrar el Toast.

  return (
    <div>
        {/* Botón para mostrar el Toast */}
      <Button color="primary" onClick={toggleToast}>
        Show Toast
      </Button>
      {/* Toast que se muestra al hacer clic en el botón */}
      <div className="p-3 my-2 rounded">
        <Toast isOpen={showToast}>  {/* Contenedor principal del Toast. Se muestra o se oculta según el estado de showToast. */}
            {/* Encabezado del Toast con un botón para cerrar */}
          <ToastHeader toggle={toggleToast}> {/* Encabezado del Toast*/}
          Correa de reacción
          </ToastHeader>
           {/* Cuerpo del Toast con estilo personalizado */}
           {/*Contenido del cuerpo del Toast muestra mensaje */}
          <ToastBody className="blue-toast"> {/*define el archivo style.css para aplicar el color azul al toast */}
          Este es un brindis por un trasfondo informativo: ¡échale un vistazo!
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

//exporta el componente 
export default ToastButton;
