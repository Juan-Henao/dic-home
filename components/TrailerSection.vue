<template>
  <section id="trailer">
    <div class="video-container" ref="videoContainer">
      <iframe
        v-if="shouldLoadIframe"
        :src="videoUrl"
        title="DIC Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoUrl =
  "https://www.youtube.com/embed/CgoqW-mDfK8?autoplay=1&mute=1&loop=1&playlist=CgoqW-mDfK8";
const shouldLoadIframe = ref(false);
const videoContainer = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        shouldLoadIframe.value = true;
        observer.disconnect(); // Una vez que se carga, no necesitamos seguir observando
      }
    },
    {
      root: null, // Observa en el viewport principal
      threshold: 0.1, // Se activa cuando el 10% del contenedor es visible
    }
  );

  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
#trailer {
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* Mantiene una relación de aspecto 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background-color: #000; /* Fondo negro mientras se carga el video */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
