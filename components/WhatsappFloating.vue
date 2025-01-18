<template>
    <a href="https://wa.me/3205960962" target="_blank" class="floating-button" title="Contáctanos por WhatsApp">
        <img src="@/assets/icons/whatsapp.svg" alt="Facebook" />
    </a>
</template>

<style scoped>
.floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 1000;
    text-decoration: none;
}

.floating-button:hover {
    background-color: #1ebe57;
}

.floating-button i {
    font-size: 24px;
    /* Tamaño del ícono */
}
</style>