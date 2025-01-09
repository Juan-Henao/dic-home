<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import gersonImage from '@/assets/Gerson.jpg';
import nicolasImage from '@/assets/Alfaro.jpeg';
import henaoImage from '@/assets/Henao.jpg';
import leonardoImage from '@/assets/Leonardo.jpeg';

const { t } = useI18n();

const leaders = [
  {
    name: t('leaders.gerson.name'),
    role: t('leaders.gerson.role'),
    image: gersonImage,
  },
  {
    name: t('leaders.henao.name'),
    role: t('leaders.henao.role'),
    image: henaoImage,
  },
  {
    name: t('leaders.leonardo.name'),
    role: t('leaders.leonardo.role'),
    image: leonardoImage,
  },
  {
    name: t('leaders.nicolas.name'),
    role: t('leaders.nicolas.role'),
    image: nicolasImage,
  },
];

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
    <h2>{{ $t('leaders.title') }}</h2>
    <div class="carousel">
      <div class="carousel-item" v-for="(leader, index) in leaders" :key="index">
        <img :src="leader.image" :alt="leader.name" />
        <p>{{ leader.name }}</p>
        <small>{{ leader.role }}</small>
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
