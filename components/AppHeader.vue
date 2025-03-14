<template>
  <HeaderComponent :logoSrc="logoSrc" :logoAlt="logoAlt" :backgroundSrc="backgroundSrc" :links="links" />
</template>

<script setup lang="ts">
const logoSrc = ref('/img/logo.webp');
const logoAlt = ref('Your Minecraft Server logo');

const backgroundSrc = ref('/img/background.webp');

const links = ref([
  {
    title: 'Home',
    path: '/',
    icon: 'fa-solid fa-house',
    external: false,
    blank: false,
  },
  {
    title: 'Rules',
    path: '/rules',
    icon: 'fa-solid fa-scroll',
    external: false,
    blank: false,
  },
  {
    title: 'Store',
    path: 'https://nexomc.craftingstore.net/',
    icon: 'fa-solid fa-basket-shopping',
    external: true,
    blank: false,
  },
  {
    title: 'Staff',
    path: '/staff',
    icon: 'fa-solid fa-user-group',
    external: false,
    blank: false,
  },
  {
    title: 'Vote',
    path: '/vote',
    icon: 'fa-solid fa-check-to-slot',
    external: false,
    blank: false,
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: 'fa-solid fa-question-circle',
    external: false,
    blank: false,
  },
])
</script>