<template>
  <section id="about">
    <h2>{{ $t('about.title') }}</h2>
    <p>{{ $t('about.description') }}</p>
  </section>
</template>

<style scoped>
section {
  padding: 50px 20px;
  margin: 20px auto;
  max-width: 900px;
  background: #f4f4f4;
  color: black;
  border-radius: 10px; /* Añade esquinas redondeadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Añade una sombra sutil */
}

h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #001F3F; /* Azul oscuro para el título */
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify; /* Justifica el texto */
}
</style>
