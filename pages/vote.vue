<template>
  <VoteReward imgSrc="/img/key.webp" imgAlt="Vote key">
    For every vote you get 1 Basic vote key.
  </VoteReward>

  <Container>
    <h1 class="text-slate-200 text-3xl text-center mb-8">Voting</h1>

    <VotePanel :sites="voteSites" />
  </Container>
</template>

<script setup lang="ts">
const voteSites = ref([
  {
    title: 'Soon...',
    url: '',
  },
  {
    title: 'Soon...',
    url: '',
  },
  {
    title: 'Soon...',
    url: '',
  },
  {
    title: 'Soon...',
    url: '',
  },
]);

useHead({
  title: 'Vote',
})
</script>