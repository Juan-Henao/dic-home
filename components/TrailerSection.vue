<template>
    <section id="trailer">
      <div class="video-container">
        <iframe
          :src="videoUrl"
          title="DIC Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  // Agrega los parámetros para reproducción automática y silencio
  const videoUrl =
    "https://www.youtube.com/embed/YUMdd27gYbk?autoplay=1&mute=1&loop=1";
  // Reemplaza "your_video_id" con el ID real de tu video de YouTube.
  </script>
  
  <style scoped>
  #trailer {
    padding: 50px 20px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #001F3F;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: #555;
    line-height: 1.6;
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
  