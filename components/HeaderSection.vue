<template>
  <header>
    <h1>Bienvenido a Defense Innovation Corp</h1>
    <p class="slogan">Defendiendo el futuro, con tecnología de vanguardia</p>
    <a href="#services">Explora Nuestras Soluciones</a>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Bienvenido a Defense Innovation Corp",
    },
    slogan: {
      type: String,
      default: "Defendiendo el futuro, con tecnología de vanguardia",
    },
    linkText: {
      type: String,
      default: "Explora Nuestras Soluciones",
    },
    linkHref: {
      type: String,
      default: "#services",
    },
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(135deg, #001F3F, #003366);
  color: white;
  text-align: center;
  padding: 50px 20px;
  position: relative;
}

header h1 {
  font-size: 3rem;
  margin: 0;
}

header .slogan {
  font-size: 1.5rem;
  margin: 10px 0 20px;
  font-style: italic;
  color: #b0c4de; /* Azul claro para resaltar */
}

header a {
  background: #FF851B;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  transition: background 0.3s ease-in-out;
}

header a:hover {
  background: #E67817;
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }
  header .slogan {
    font-size: 1.2rem;
  }
  header {
    padding: 30px 10px;
  }
}
</style>
