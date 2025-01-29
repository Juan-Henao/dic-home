<template>
  <section id="collaborators">
    <h2>{{ $t('collaborators.title') }}</h2>
    <p>{{ $t('collaborators.description') }}</p>
    <div class="collaborators-grid">
      <div class="collaborator-card" v-for="(collaborator, index) in collaborators" :key="index">
        <img :src="collaborator.image" :alt="collaborator.name" />
        <div class="info">
          <h3>
            <a :href="collaborator.linkedin" target="_blank">
              {{ collaborator.name }}
            </a>
          </h3>
          <small>{{ collaborator.role }}</small>
          <p>{{ collaborator.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import angieImage from '@/assets/Angie.jpg';
import victorImage from '@/assets/images/collaborators/victor.jpg';
import cristianImage from '@/assets/images/collaborators/cristian.jpg';
import danielaImage from '@/assets/images/collaborators/daniela.jpg';

const { t } = useI18n();

const collaborators = [
  {
    name: t('collaborators.items.angie.name'),
    role: t('collaborators.items.angie.role'),
    description: t('collaborators.items.angie.description'),
    image: angieImage,
    linkedin: 'https://www.linkedin.com/in/angie-diaz-59459b191/',
  },
  {
    name: t('collaborators.items.victor.name'),
    role: t('collaborators.items.victor.role'),
    description: t('collaborators.items.victor.description'),
    image: victorImage,
    linkedin: 'https://www.linkedin.com/in/victor-manuel-garcia-hurtado-0700a21b7/',
  }  ,
  {
    name: t('collaborators.items.daniela.name'),
    role: t('collaborators.items.daniela.role'),
    description: t('collaborators.items.daniela.description'),
    image: danielaImage,
    linkedin: 'https://www.linkedin.com/in/daniela-villalba-torres-9626002b2',
  },
  {
    name: t('collaborators.items.cristian.name'),
    role: t('collaborators.items.cristian.role'),
    description: t('collaborators.items.cristian.description'),
    image: cristianImage,
    linkedin: 'https://www.linkedin.com/in/cristian-david-trilleras-tabares-56285929a/',
  }

];
</script>

<style scoped>
#collaborators {
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
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

.collaborators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.collaborator-card {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 15px;
}

.collaborator-card img {
  width: 100px;
  /* Tamaño fijo para que todas las fotos sean uniformes */
  height: 100px;
  border-radius: 50%;
  /* Hace que la imagen sea redonda */
  object-fit: cover;
  /* Asegura que la imagen se ajuste dentro del contenedor */
  aspect-ratio: 1 / 1;
  /* Mantiene la proporción cuadrada */
  margin: 0 auto 15px;
  display: block;
}

.info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #001F3F;
}

.info small {
  font-size: 1rem;
  color: #FF851B;
}

.info p {
  font-size: 0.9rem;
  color: #555;
  margin-top: 10px;
  line-height: 1.4;
}
</style>