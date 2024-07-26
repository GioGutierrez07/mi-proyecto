import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
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
  //para almacenar los errores de validaciones del form 
  const [errors, setErrors] = useState({});

  //actualiza fromdata cuando se cambian los valores en el form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

//validaciones 
  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date().toISOString().split('T')[0];

    if (!nameRegex.test(formData.nombre)) {
      newErrors.nombre = 'Solo acepta letras';
    }

    if (!nameRegex.test(formData.apellido)) {
      newErrors.apellido = 'Solo acepta letras';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Debe tener formato de correo electrónico';
    }

    if (!Number.isInteger(+formData.edad) || formData.edad <= 0 || formData.edad > 100) {
      newErrors.edad = 'Solo acepta números positivos, hasta el número 100';
    }

    if (formData.fechaRegistro && formData.fechaRegistro < today) {
      newErrors.fechaRegistro = 'Solo debe aceptar fechas a partir del día en curso';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleModal = () => { //muestra y oculta el modal
    if (validate()) {
      setModal(!modal);
    }
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
           {/* Campo de texto para el nombre */}
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            valid={!errors.nombre && formData.nombre}
            invalid={!!errors.nombre}
          />
          {errors.nombre && <FormFeedback>{errors.nombre}</FormFeedback>}
        </FormGroup>
        {/* Campo de texto para el apellido */}
        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input
            type="text"
            name="apellido"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            valid={!errors.apellido && formData.apellido}
            invalid={!!errors.apellido}
          />
          {errors.apellido && <FormFeedback>{errors.apellido}</FormFeedback>}
        </FormGroup>
        {/* Campo de texto para el email */}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            valid={!errors.email && formData.email}
            invalid={!!errors.email}
          />
          {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
        </FormGroup>
        {/* Campo de texto para la contraseña */}
        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input
            type="password"
            name="contraseña"
            id="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />
        </FormGroup>
        {/* Campo de texto para la edad */}
        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input
            type="number"
            name="edad"
            id="edad"
            value={formData.edad}
            onChange={handleChange}
            valid={!errors.edad && formData.edad}
            invalid={!!errors.edad}
          />
          {errors.edad && <FormFeedback>{errors.edad}</FormFeedback>}
        </FormGroup>
        {/* Campo de género */}
        <FormGroup tag="fieldset">
          <Label>Género</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="genero"
                value="Masculino"
                checked={formData.genero === 'Masculino'}
                onChange={handleChange}
              />{' '}
              Masculino
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="genero"
                value="Femenino"
                checked={formData.genero === 'Femenino'}
                onChange={handleChange}
              />{' '}
              Femenino
            </Label>
          </FormGroup>
        </FormGroup>
        {/*  rol */}
        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input
            type="select"
            name="rol"
            id="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option>Seleccione</option>
            <option>Admin</option>
            <option>Usuario</option>
          </Input>
        </FormGroup>
        {/*checkbox para opciones */}
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="opciones"
              checked={formData.opciones}
              onChange={handleChange}
            />{' '}
            Opciones
          </Label>
        </FormGroup>
        {/*Notas */}
        <FormGroup>
          <Label for="notas">Notas</Label>
          <Input
            type="textarea"
            name="notas"
            id="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </FormGroup>
        {/*Fecha de registro */}
        <FormGroup>
          <Label for="fechaRegistro">Fecha de Registro</Label>
          <Input
            type="date"
            name="fechaRegistro"
            id="fechaRegistro"
            value={formData.fechaRegistro}
            onChange={handleChange}
            valid={!errors.fechaRegistro && formData.fechaRegistro}
            invalid={!!errors.fechaRegistro}
          />
          {errors.fechaRegistro && <FormFeedback>{errors.fechaRegistro}</FormFeedback>}
        </FormGroup>
        {/*botones */}
        <Button color="primary" onClick={toggleModal}>Mostrar</Button>
        <Button color="secondary" onClick={resetForm}>Reiniciar</Button>
      </Form>
        {/*mostrar */}
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
