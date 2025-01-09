<template>
  <section id="testimonios">
    <h2>{{ $t('testimonios.title') }}</h2>
    <p>{{ $t('testimonios.description') }}</p>
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

<script setup>
import { useI18n } from 'vue-i18n';
import TestimonyCard from './TestimonyCard.vue';

const { t } = useI18n();

const testimonios = [
  {
    stars: '★★★★☆',
    comment: t('testimonios.items.1.comment'),
    name: t('testimonios.items.1.name'),
  },
  {
    stars: '★★★★★',
    comment: t('testimonios.items.2.comment'),
    name: t('testimonios.items.2.name'),
  },
  {
    stars: '★★★★★',
    comment: t('testimonios.items.3.comment'),
    name: t('testimonios.items.3.name'),
  },
  {
    stars: '★★★★☆',
    comment: t('testimonios.items.4.comment'),
    name: t('testimonios.items.4.name'),
  },
  {
    stars: '★★★★★',
    comment: t('testimonios.items.5.comment'),
    name: t('testimonios.items.5.name'),
  },
  {
    stars: '★★★★★',
    comment: t('testimonios.items.6.comment'),
    name: t('testimonios.items.6.name'),
  },
];
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
  