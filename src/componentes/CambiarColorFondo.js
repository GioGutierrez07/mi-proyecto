import React, { useState, useEffect } from 'react'; //importa la bibleoteca react y 2 hooks usestate y useeffect
//useState: Hook que permite agregar estado local a componentes funcionales.
// En este caso, colorFondo es el estado y setColorFondo es la función para actualizar ese estado.

//useEffect
//useEffect: Hook que permite realizar efectos secundarios en componentes funcionales.
// En este caso, se utiliza para actualizar el color de fondo del body del documento cuando cambia colorFondo
function CambiarColorFondo() {
  const [colorFondo, setColorFondo] = useState('#ffffff'); // Estado inicial para el color de fondo del sitio

  const cambiarColor = () => {
    const nuevoColor = colorFondo === '#ffffff' ? '#ffcccc' : '#ffffff'; // Alterna el color
    setColorFondo(nuevoColor); // Actualiza el estado del color de fondo
  };

  useEffect(() => {
    document.body.style.backgroundColor = colorFondo; // Aplica el color de fondo al body
  }, [colorFondo]); // Dependencia: se ejecuta cuando `colorFondo` cambia

//cambia el color del fondo 
  return (
    <div>
      <button onClick={cambiarColor}>Cambiar Color de Fondo</button>
    </div>
  );
}
//exporta el componente 
export default CambiarColorFondo;
