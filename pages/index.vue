<template>
    <div>
      <HeaderSection />
      <AboutSection />
      <TrailerSection />
      <ServicesSection />
      <LeadersSection />
      <CollaboratorsSection/>
      <ClientsSection />
      <TestimonySection />
      <HowToStartSection />
      <ContactSection />
      <WhatsappFloating />
      <FooterSection />
    </div>
  </template>
  
  <script setup>
  import HeaderSection from '@/components/HeaderSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ServicesSection from '@/components/ServicesSection.vue';
  import LeadersSection from '@/components/LeadersSection.vue';
  import ClientsSection from '@/components/ClientsSection.vue';
  import CollaboratorsSection from '@/components/CollaboratorsSection.vue';
  import ContactSection from '@/components/ContactSection.vue';
  import WhatsappFloating from '~/components/WhatsappFloating.vue';
  import FooterSection from '@/components/FooterSection.vue';
  import HowToStartSection from '@/components/HowToStartSection.vue';
  import TrailerSection from '~/components/TrailerSection.vue';

import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: t('meta.title'), 
  meta: [
    {
      name: 'description',
      content: t('meta.description'), 
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.dic.com.co' + useRoute().path,
    },
  ],
});

onMounted(() => {
  const sections = document.querySelectorAll('section');

  const revealSection = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection();
});

const cookieLocale = useCookie('locale');

  

</script>

