<template>
  <section id="clients">
    <h2>{{ $t('clients.title') }}</h2>
    <div class="slider">
      <div class="slide-track" ref="slideTrack">
        <div
          class="slide"
          v-for="(client, index) in [clients[clients.length - 1], ...clients, clients[0]]"
          :key="index"
        >
          <a :href="client.link" target="_blank" rel="noopener noreferrer">
            <img :src="client.image" :alt="$t(`clients.names.${client.name}`)" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import PachamamaImage from '@/assets/PachamamaImage.jpeg';
import CapitalSoftwareImage from '@/assets/CapitalSoftware.jpeg';
import BlackSoulImage from '@/assets/BlackSoul.jpeg';

const clients = [
  {
    name: 'pachamama',
    link: 'https://www.linkedin.com/company/pachamama-pm/',
    image: PachamamaImage,
  },
  {
    name: 'capitalSoftware',
    link: 'https://www.linkedin.com/company/capitalsoftware/',
    image: CapitalSoftwareImage,
  },
  {
    name: 'blackSoulSystems',
    link: 'https://www.linkedin.com/company/black-soul-systems/?viewAsMember=true',
    image: BlackSoulImage,
  },
];

const slideTrack = ref(null);

onMounted(() => {
  const track = slideTrack.value;
  const slides = track.children;
  let currentIndex = 1; // Empieza en el primer slide real (después del duplicado inicial)
  const totalSlides = slides.length;

  // Configuración inicial
  track.style.transition = 'transform 1s linear';
  track.style.transform = `translateX(-${100 * currentIndex}%)`;

  const updateCarousel = () => {
    currentIndex++;
    track.style.transition = 'transform 1s linear';
    track.style.transform = `translateX(-${100 * currentIndex}%)`;

    // Cuando llegamos al final del track, reinicia al principio
    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        track.style.transition = 'none'; // Desactiva la transición para evitar parpadeos
        currentIndex = 1; // Reinicia al primer slide real
        track.style.transform = `translateX(-${100 * currentIndex}%)`;
      }, 1000); // El tiempo coincide con la duración de la animación (1s)
    }

    // Cuando volvemos al principio desde el último duplicado
    if (currentIndex === 0) {
      setTimeout(() => {
        track.style.transition = 'none'; // Desactiva la transición para evitar parpadeos
        currentIndex = totalSlides - 2; // Reinicia al último slide real
        track.style.transform = `translateX(-${100 * currentIndex}%)`;
      }, 1000);
    }
  };

  // Intervalo para animar el carrusel
  setInterval(updateCarousel, 3000);
});
</script>

<style scoped>
#clients {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #001F3F;
}

.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: auto;
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
}

.slide-track {
  display: flex;
  transition: transform 1s linear;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  max-height: 80px;
  max-width: 200px;
  object-fit: contain;
}
</style>
