<template>
  <section id="contact">
    <h2>{{ $t('contact.title') }}</h2>
    <p>{{ $t('contact.description') }}</p>
    <a href="https://calendly.com/juan-henao-eam/30min" target="_blank" class="calendly-link">
      {{ $t('contact.cta') }}
    </a>
  </section>
</template>

<style scoped>
section {
  padding: 50px 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #001F3F;
}

section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
  line-height: 1.6;
}

.calendly-link {
  display: inline-block;
  padding: 15px 25px;
  font-size: 1rem;
  font-weight: bold;
  background: #FF851B;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.calendly-link:hover {
  background: #E67817;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  section h2 {
    font-size: 1.8rem;
  }

  section p {
    font-size: 1rem;
  }

  .calendly-link {
    font-size: 0.9rem;
    padding: 12px 20px;
  }
}
</style>
