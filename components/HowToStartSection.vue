<template>
  <section id="como-empezar">
    <div class="descripcion">
      <h2>{{ $t('steps.title') }}</h2>
      <p>{{ $t('steps.description') }}</p>
    </div>
    <div class="pasos">
      <div class="paso" v-for="(step, index) in steps" :key="index">
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const steps = [
  {
    title: t('steps.steps.1.title'),
    description: t('steps.steps.1.description'),
  },
  {
    title: t('steps.steps.2.title'),
    description: t('steps.steps.2.description'),
  },
  {
    title: t('steps.steps.3.title'),
    description: t('steps.steps.3.description'),
  },
  {
    title: t('steps.steps.4.title'),
    description: t('steps.steps.4.description'),
  },
];
</script>

<style scoped>
#como-empezar {
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #f9f9f9;
  height: 100vh;
  overflow: hidden;
}

.descripcion {
  flex: 1;
  padding: 20px;
  background-color: #001F3F;
  color: white;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.descripcion h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #FF851B;
}

.descripcion p {
  font-size: 1.2em;
  color: #ddd;
  line-height: 1.6;
}

.pasos {
  flex: 2;
  padding: 20px;
  overflow-y: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.paso {
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.paso:last-child {
  border-bottom: none;
}

.paso-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.paso h3 {
  font-size: 1.8em;
  color: #001F3F;
  margin: 0;
}

.paso p {
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
}

.icono {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  #como-empezar {
    flex-direction: column;
    height: auto;
  }

  .descripcion {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .descripcion h2 {
    font-size: 2em;
  }

  .descripcion p {
    font-size: 1em;
  }

  .paso h3 {
    font-size: 1.5em;
  }

  .paso p {
    font-size: 1em;
  }

  .icono {
    width: 30px;
    height: 30px;
  }
}
</style>
