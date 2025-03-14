<template>
  <div class="bg-gray-900 min-h-screen">
    <div class="min-h-screen flex flex-col">
      <AppHeader />
      <main class="flex flex-col grow">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.serverName}` : appConfig.serverName;
  },
  meta: [
    { name: 'description', content: appConfig.description }
  ],
})
</script>