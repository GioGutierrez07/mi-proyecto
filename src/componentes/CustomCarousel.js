import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente
// Importa componentes específicos de Reactstrap
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'; 

// Definición de los elementos del carrusel
//arreglo de las imagenes 
const items = [
  {
    src: '/imagenes/dragon.jpg', // Ruta a la imagen en la carpeta public
    altText: 'Slide 1', // Texto alternativo para la imagen
    caption: 'Caption 1'  // Texto del pie de foto
  },
  {
    src: '/imagenes/gato1.jpeg',
    altText: 'Slide 2',
    caption: 'Caption 2'
  },
  {
    src: '/imagenes/gato2.png',
    altText: 'Slide 3',
    caption: 'Caption 3'
  },
  {
    src: '/imagenes/robot.jpeg',
    altText: 'Slide 4',
    caption: 'Caption 4'
  }
];
/**
 * Componente de carrusel personalizado.
 * Utiliza Reactstrap para mostrar un carrusel con imágenes y controles de navegación.
 */
const CustomCarousel = () => {
    //activeIndex: Maneja el índice de la diapositiva actualmente activa.
  const [activeIndex, setActiveIndex] = useState(0); // Estado para manejar el índice activo
  //animating: Maneja el estado de la animación para evitar cambios mientras se está animando.
  const [animating, setAnimating] = useState(false); // Estado para manejar la animación

// Función para avanzar al siguiente elemento del carrusel
//next: Avanza al siguiente elemento del carrusel. Si la animación está en curso, no hace nada.
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Función para retroceder al elemento anterior del carrusel
  //previous: Retrocede al elemento anterior del carrusel. Si la animación está en curso, no hace nada.
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

   // Función para ir a un índice específico del carrusel
   //goToIndex: Salta a un índice específico del carrusel. Si la animación está en curso, no hace nada.
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Mapea los elementos para crear las diapositivas del carrusel
  //Mapea los elementos del arreglo items para crear las diapositivas del carrusel 
  //utilizando CarouselItem. También incluye CarouselCaption para mostrar el pie de foto.
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)} // Maneja el inicio de la animación
        onExited={() => setAnimating(false)} // Maneja el fin de la animación
        key={item.src} // Clave única para cada elemento
      >
        <img className="carousel-image" src={item.src} alt={item.altText} /> {/* Imagen del carrusel */}
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> {/* Pie de foto */}
      </CarouselItem>
    );
  });
//Carousel: Componente que contiene las diapositivas y los controles de navegación.
  return (
    <Carousel
      activeIndex={activeIndex} // Índice activo del carrusel
      next={next} // Función para avanzar al siguiente elemento
      previous={previous} // Función para retroceder al elemento anterior
    >
        {/* Indicadores del carrusel */}
        {/**CarouselIndicators: Muestra los indicadores del carrusel. */}
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides} 
      {/* Control de navegación anterior */}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      {/* Control de navegación siguiente */}
      {/**controles de navegacion para avanzar o retroceder */}
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};
//exporta el componente 
export default CustomCarousel;
