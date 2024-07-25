import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCar, faBicycle, faAnchor } from '@fortawesome/free-solid-svg-icons';
import datos from '../datos.json'; // Asegúrate de que la ruta sea correcta

const iconos = [faCoffee, faAppleAlt, faCar, faBicycle, faAnchor]; // Define un conjunto de iconos

const TablaConIconos = () => {
    // useState hook para manejar el estado del modal y la imagen actual
  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

   // Función para alternar el estado del modal y establecer la imagen actual
  const toggle = (image) => {
    setCurrentImage(image);
    setModal(!modal);
  };

  return (
    <div>
        {/* Tabla de Reactstrap */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Texto 1</th>
            <th>Texto 2</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
            {/* Mapear los datos del archivo JSON a filas de la tabla */}
          {datos.map((registro, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th> {/* Número consecutivo */}
              <td>{registro.texto1}</td> {/* Primera columna de texto */}
              <td>{registro.texto2}</td> {/* Segunda columna de texto */}
              <td><FontAwesomeIcon icon={iconos[index % iconos.length]} /></td> {/* Asignar un icono diferente */}
              {/* Botón para abrir el modal y mostrar la imagen correspondiente */}
              <td><Button color="secondary" onClick={() => toggle(registro.imagen)}>Abrir Modal</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
       {/* Modal de Reactstrap */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Imagen</ModalHeader>
        <ModalBody>
            {/* Mostrar la imagen correspondiente al registro actual */}
          <img src={currentImage} alt="Imagen del registro" style={{ width: '100%' }} />
        </ModalBody>
      </Modal>
    </div>
  );
};
//exportacion 
export default TablaConIconos;
