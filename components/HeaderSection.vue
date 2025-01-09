<template>
  <header>
    <h1>{{ $t('welcome') }}</h1>
    <p class="subtitle">{{ $t('fullname') }}</p>
    <p class="slogan">{{ $t('slogan') }}</p>
    <a :href="linkHref">{{ $t('explore') }}</a>
  </header>
</template>


<script>
export default {
  props: {
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

header .subtitle {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #d3d3d3; /* Gris claro */
  font-weight: bold;
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
  header .subtitle {
    font-size: 1rem;
  }
  header .slogan {
    font-size: 1.2rem;
  }
  header {
    padding: 30px 10px;
  }
}
</style>
