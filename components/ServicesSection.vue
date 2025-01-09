<template>
  <section id="services">
    <h2>{{ $t('services.title') }}</h2>
    <div class="services">
      <div class="service" v-for="(service, index) in services" :key="index">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = [
  {
    title: t('services.items.aiAgents.title'),
    description: t('services.items.aiAgents.description'),
  },
  {
    title: t('services.items.techConsulting.title'),
    description: t('services.items.techConsulting.description'),
  },
  {
    title: t('services.items.cyberSecurity.title'),
    description: t('services.items.cyberSecurity.description'),
  },
];
</script>

<style scoped>
section {
  padding: 50px 20px;
  margin: 20px auto;
  max-width: 900px;
  text-align: center;
  color: #001F3F; /* Azul oscuro */
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #001F3F;
}

.services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.service {
  flex: 1 1 calc(33.333% - 20px);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: left;
}

.service h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #FF851B; /* Naranja */
}

.service p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.service:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .service {
    flex: 1 1 100%;
  }
}
</style>
