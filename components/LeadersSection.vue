<script setup>
import { onMounted } from 'vue';

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
        <img src="https://picsum.photos/1920/1080?random=1" alt="Líder 1" />
        <p>Gerson</p>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1920/1080?random=2" alt="Líder 2" />
        <p>Leonardo</p>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1920/1080?random=3" alt="Líder 3" />
        <p>Nicolas</p>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1920/1080?random=4" alt="Líder 3" />
        <p>Juan David</p>
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
</style>
