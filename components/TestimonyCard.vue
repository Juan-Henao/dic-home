<template>
    <div class="testimonio">
      <div class="estrellas">
        {{ stars }}
      </div>
      <p class="comentario">
        "{{ comment }}"
      </p>
      <h3>- {{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stars: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .testimonio {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 300px;
    text-align: left;
    flex: 1 1 calc(33.333% - 20px);
    transition: transform 0.3s ease-in-out;
  }
  
  .testimonio:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .estrellas {
    color: #FF851B;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .comentario {
    font-size: 1rem;
    color: #333;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  
  .testimonio h3 {
    font-size: 1rem;
    color: #555;
    font-weight: bold;
  }
  </style>
  