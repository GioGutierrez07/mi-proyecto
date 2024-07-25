import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//definicion del componente 
const FormularioRegistro = () => {
  const [formData, setFormData] = useState({ //almacena los valores del formulario 
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    edad: '',
    genero: '',
    rol: '',
    opciones: false,
    notas: '',
    fechaRegistro: ''
  });
//modal controla la visibilidad del modal 
  const [modal, setModal] = useState(false);

  //actualiza fromdata cuando se cambian los valores en el form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const toggleModal = () => { // muestra y oculta el modal 
    setModal(!modal);
  };

  const resetForm = () => { //reinicia 
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      edad: '',
      genero: '',
      rol: '',
      opciones: false,
      notas: '',
      fechaRegistro: ''
    });
  };
//formatea la fecha de registro  dia/mes/año 
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    //se ajusta para tener en cuenta la zona horaria local
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset()); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <Form>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input type="text" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input type="password" name="contraseña" id="contraseña" value={formData.contraseña} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input type="number" name="edad" id="edad" value={formData.edad} onChange={handleChange} />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Género</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="genero" value="Masculino" checked={formData.genero === 'Masculino'} onChange={handleChange} />{' '}
              Masculino
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="genero" value="Femenino" checked={formData.genero === 'Femenino'} onChange={handleChange} />{' '}
              Femenino
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input type="select" name="rol" id="rol" value={formData.rol} onChange={handleChange}>
            <option>Seleccione</option>
            <option>Admin</option>
            <option>Usuario</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="opciones" checked={formData.opciones} onChange={handleChange} />{' '}
            Opciones
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="notas">Notas</Label>
          <Input type="textarea" name="notas" id="notas" value={formData.notas} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="fechaRegistro">Fecha de Registro</Label>
          <Input type="date" name="fechaRegistro" id="fechaRegistro" value={formData.fechaRegistro} onChange={handleChange} />
        </FormGroup>
        <Button color="primary" onClick={toggleModal}>Mostrar</Button>
        <Button color="secondary" onClick={resetForm}>Reiniciar</Button>
      </Form>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Información Registrada</ModalHeader>
        <ModalBody>
          <p>Nombre: {formData.nombre}</p>
          <p>Apellido: {formData.apellido}</p>
          <p>Email: {formData.email}</p>
          <p>Contraseña: {formData.contraseña}</p>
          <p>Edad: {formData.edad}</p>
          <p>Género: {formData.genero}</p>
          <p>Rol: {formData.rol}</p>
          <p>Opciones: {formData.opciones ? 'Sí' : 'No'}</p>
          <p>Notas: {formData.notas}</p>
          <p>Fecha de Registro: {formatDate(formData.fechaRegistro)}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FormularioRegistro;
