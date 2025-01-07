<template>
    <section id="como-empezar">
      <div class="descripcion">
        <h2>Cómo empezar</h2>
        <p>
          Libere el poder de la automatización de la IA para transformar los procesos rutinarios,
          garantizando la precisión, la disponibilidad 24/7 y un importante ahorro de costes.
        </p>
      </div>
      <div class="pasos">
        <div class="paso">
          <h3>01. Háblanos por privado</h3>
          <p>Vamos a analizar si realmente podemos ayudarte.</p>
        </div>
        <div class="paso">
          <h3>02. Empecemos la Consultoría</h3>
          <p>Agendemos una llamada estratégica donde vamos a analizar todos los procesos de tu negocio.</p>
        </div>
        <div class="paso">
          <h3>03. Análisis Back Office</h3>
          <p>Te prepararemos un entregable con todas las soluciones de IA aplicables a tu negocio.</p>
        </div>
        <div class="paso">
          <h3>04. Plan de Acción</h3>
          <p>Finalmente, nos pondremos de acuerdo para empezar a desarrollar soluciones personalizadas de IA.</p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  #como-empezar {
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: #f9f9f9;
    height: 100vh; /* Ocupa toda la altura de la pantalla */
    overflow: hidden; /* Para evitar scroll en la sección */
  }
  
  .descripcion {
    flex: 1;
    padding: 20px;
    background-color: #001F3F;
    color: white;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .descripcion h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #FF851B;
  }
  
  .descripcion p {
    font-size: 1.2em;
    color: #ddd;
    line-height: 1.6;
  }
  
  .pasos {
    flex: 2;
    padding: 20px;
    overflow-y: auto; /* Scroll solo en la lista de pasos */
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .pasos::-webkit-scrollbar {
    width: 8px;
  }
  
  .pasos::-webkit-scrollbar-thumb {
    background-color: #FF851B;
    border-radius: 4px;
  }
  
  .pasos::-webkit-scrollbar-thumb:hover {
    background-color: #E67817;
  }
  
  .paso {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .paso:last-child {
    border-bottom: none;
  }
  
  .paso h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #001F3F;
  }
  
  .paso p {
    font-size: 1.2em;
    color: #666;
    line-height: 1.6;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    #como-empezar {
      flex-direction: column;
      height: auto; /* Ajusta la altura para pantallas pequeñas */
    }
  
    .descripcion {
      margin-right: 0;
      margin-bottom: 20px;
    }
  
    .descripcion h2 {
      font-size: 2em;
    }
  
    .descripcion p {
      font-size: 1em;
    }
  
    .pasos {
      padding: 10px;
    }
  
    .paso h3 {
      font-size: 1.5em;
    }
  
    .paso p {
      font-size: 1em;
    }
  }
  
  @media (max-width: 480px) {
    .descripcion h2 {
      font-size: 1.8em;
    }
  
    .descripcion p {
      font-size: 0.9em;
    }
  
    .paso h3 {
      font-size: 1.3em;
    }
  
    .paso p {
      font-size: 0.9em;
    }
  }
  </style>
  