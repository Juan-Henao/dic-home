<script setup>
import { onMounted } from 'vue';
import gersonImage from '@/assets/Gerson.jpeg';
import nicolasImage from '@/assets/Alfaro.jpeg';
import henaoImage from '@/assets/Henao.jpg';
import leonardoImage from '@/assets/Leonardo.jpeg';

onMounted(() => {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  const updateCarousel = () => {
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 3000);
});
</script>
<template>
  <section id="leaders">
    <h2>Nuestros Líderes</h2>
    <div class="carousel">
      <div class="carousel-item">
        <img :src="gersonImage" alt="Gerson - CEO-IA" />
        <p>Gerson</p>
        <small>CEO-IA</small>
      </div>
      <div class="carousel-item">
        <img :src="henaoImage" alt="Juan David - Líder del Equipo de Ingeniería" />
        <p>Juan David</p>
        <small>Líder del Equipo de Ingeniería</small>
      </div>
      <div class="carousel-item">
        <img :src="leonardoImage" alt="Leonardo - Líder de Investigación y Desarrollo" />
        <p>Leonardo</p>
        <small>Líder de Investigación, Desarrollo e Innovación (I+D+i)</small>
      </div>
      <div class="carousel-item">
        <img :src="nicolasImage" alt="Nicolas - Director Jurídico" />
        <p>Nicolas</p>
        <small>Director Jurídico</small>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 50px 20px;
  margin: 20px auto;
  max-width: 900px;
}

.carousel {
  display: flex;
  overflow: hidden;
  position: relative;
  gap: 10px;
}

.carousel-item {
  flex: 0 0 100%;
  text-align: center;
  transition: transform 0.5s ease-in-out;
}

.carousel-item img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

.carousel-item p {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0 5px;
}

.carousel-item small {
  font-size: 1rem;
  color: #555;
}
</style>
