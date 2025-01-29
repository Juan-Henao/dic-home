<template>
  <footer>
    <p>&copy; 2025 {{ $t('footer.rights') }}</p>
    <div class="social-links">
      <a
        href="https://www.linkedin.com/company/dicsec/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://www.facebook.com/people/DIC/61569913103130/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img src="@/assets/icons/facebook.svg" alt="Facebook" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 10px;
  background: linear-gradient(135deg, #1c0b40, #3b8c75);
  color: white;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  display: inline-block;
  width: 24px;
  height: 24px;
}

.social-links img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
