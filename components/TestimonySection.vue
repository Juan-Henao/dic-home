<template>
    <section id="testimonios">
      <h2>Testimonios</h2>
      <p>Conoce lo que nuestros clientes dicen sobre nosotros y cómo hemos transformado sus negocios con nuestras soluciones innovadoras.</p>
      <div class="carousel-container">
        <div class="carousel">
          <TestimonyCard
            v-for="(testimonio, index) in testimonios"
            :key="index"
            :stars="testimonio.stars"
            :comment="testimonio.comment"
            :name="testimonio.name"
            class="carousel-item"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TestimonyCard from './TestimonyCard.vue';
  
  export default {
    components: {
      TestimonyCard,
    },
    data() {
      return {
        testimonios: [
          {
            stars: '★★★★☆',
            comment:
              'Gracias a DIC, logramos automatizar nuestros procesos y aumentar la eficiencia de nuestro equipo en más del 40%. Su servicio es impecable.',
            name: 'Carolina López',
          },
          {
            stars: '★★★★★',
            comment:
              'La seguridad de nuestra infraestructura digital ha mejorado significativamente gracias a las soluciones de ciberseguridad que implementaron. ¡Altamente recomendados!',
            name: 'Alejandro Martínez',
          },
          {
            stars: '★★★★★',
            comment:
              'La consultoría tecnológica fue clave para optimizar nuestros sistemas. Ahora somos más rápidos y precisos en todas nuestras operaciones.',
            name: 'Sofía Ramírez',
          },
          {
            stars: '★★★★☆',
            comment:
              'Las herramientas que implementaron para nuestra empresa han sido transformadoras. Excelente equipo de trabajo.',
            name: 'María González',
          },
          {
            stars: '★★★★★',
            comment:
              'Estamos más protegidos contra ataques digitales gracias a DIC. Su experiencia en ciberseguridad es invaluable.',
            name: 'Javier Torres',
          },
          {
            stars: '★★★★★',
            comment:
              'El equipo de DIC superó nuestras expectativas. Su enfoque estratégico y sus soluciones personalizadas marcaron la diferencia.',
            name: 'Luisa Fernández',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  #testimonios {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  #testimonios h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #001F3F;
  }
  
  #testimonios p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: #555;
    line-height: 1.6;
  }
  
  .carousel-container {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel {
    display: flex;
    gap: 20px;
    transition: transform 1s ease-in-out;
    animation: slide 24s infinite; /* Cambiado a 24s */
  }
  
  .carousel-item {
    flex: 0 0 calc(33.333% - 20px);
  }
  
  /* Animación del carrusel */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    33% {
      transform: translateX(-33.333%);
    }
    66% {
      transform: translateX(-66.666%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  @media (max-width: 768px) {
    .carousel-item {
      flex: 0 0 calc(100% - 20px);
    }
  
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  </style>
  