<template>
  <Container>
    <h1 class="text-slate-200 text-3xl text-center mb-8">Frequently asked questions</h1>

    <FaqAccordion :items="items" />
  </Container>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: 'What is the Minecraft server version?',
    content: 'Our server is running version <span class="font-bold text-slate-200">1.17.2</span>.',
    active: false
  },
  {
    title: 'What can I join on?',
    content: 'You are able to join on Eagler, CrackedMC and Java',
    active: false
  },
  {
    title: 'Is cheating allowed on the server?',
    content: 'No, definitely not. We recommend to read our <a href="/rules" class="text-slate-200 font-bold">rules</a>.',
    active: false
  }
]);

useHead({
  title: 'FAQ',
})
</script>