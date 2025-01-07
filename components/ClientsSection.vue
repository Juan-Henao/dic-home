<template>
  <section id="clients">
    <h2>Nuestras Marcas Asociadas</h2>
    <div class="slider">
      <div class="slide-track">
        <div class="slide" v-for="(client, index) in duplicatedClients" :key="index">
          <a :href="client.link" target="_blank" rel="noopener noreferrer">
            <img :src="client.image" :alt="client.name" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PachamamaImage from '@/assets/Pachamama.jpeg';
import CapitalSoftwareImage from '@/assets/CapitalSoftware.jpeg';
import BlackSoulImage from '@/assets/BlackSoul.jpeg';

const clients = [
  {
    name: 'Pachamama',
    link: 'https://www.linkedin.com/company/pachamama-pm/',
    image: PachamamaImage,
  },
  {
    name: 'Capital Software',
    link: 'https://www.linkedin.com/company/capitalsoftware/',
    image: CapitalSoftwareImage,
  },
  {
    name: 'Black Soul Systems',
    link: 'https://www.linkedin.com/company/black-soul-systems/?viewAsMember=true',
    image: BlackSoulImage,
  },
];

// Duplicamos los clientes para lograr el efecto infinito
const duplicatedClients = [...clients, ...clients];
</script>

<style scoped>
#clients {
  text-align: center;
}

.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(250px * 6); /* 6 = número de slides duplicados */
}

.slide {
  height: 100px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  max-height: 80px;
  max-width: 200px;
  object-fit: contain;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 3)); /* 3 = número de slides originales */
  }
}
</style>
