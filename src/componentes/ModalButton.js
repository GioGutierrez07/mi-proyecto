// Importa React y el hook useState para manejar el estado del componente
import React, { useState } from 'react';
// Importa componentes específicos de Reactstrap
//para crear y estilizar el modal y el botón
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Componente muestra un botón que al hacer clic abre un modal con detalles.
const ModalButton = () => {
  const [modal, setModal] = useState(false); // Estado para manejar la visibilidad del modal

   // Función para alternar la visibilidad del modal
   //Alterna el estado de modal entre true y false. 
   //Esta función se llama cada vez que se hace clic en el botón de mostrar/cerrar el modal.
  const toggleModal = () => setModal(!modal);

  return (
    <div>
        {/* Botón para mostrar el modal */}
        {/* Un botón que, al hacer clic, llama a toggleModal para mostrar el modal. */}
      <Button color="danger" onClick={toggleModal}> 
        Show Modal
      </Button>

       {/* Modal que se muestra al hacer clic en el botón */}
       {/*Contenedor principal del modal. Se muestra o se oculta según el estado de modal */}
      <Modal isOpen={modal} toggle={toggleModal}>

         {/* Encabezado del modal con un botón para cerrar */}
        <ModalHeader toggle={toggleModal}>Detalles</ModalHeader>

        {/* Cuerpo del modal con información Aquí se muestra información detallada
         (nombre y apellido en este caso) */}
        <ModalBody>
          Nombre: José Giovanny
        </ModalBody>
        <ModalBody>
        Apellido: Alcantar Gutiérrez
        </ModalBody>

        {/* Pie del modal con un botón para cerrar se manda llamar toggleModal */}
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

//exportacion del componente 
export default ModalButton;
