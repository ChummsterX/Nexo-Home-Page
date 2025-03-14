<template>
  <FooterComponent :socialNetworks="socialNetworks" />
</template>

<script lang="ts" setup>
const socialNetworks = ref([
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/@ChummsterX',
    icon: 'fa-brands fa-youtube',
  },

  {
    title: 'Discord',
    link: 'https://dsc.gg/nexosmp',
    icon: 'fa-brands fa-discord',
  },
])
</script>