<template>
  <div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
    <div class="p-3 pb-0 flex justify-center bg-gray-900/50 border-b border-gray-700">
      <img class="max-w-48" :src="'https://visage.surgeplay.com/bust/' + props.name + '.webp'" :alt="props.name + ' avatar'">
    </div>

    <div class="p-4">
      <h3 class="text-slate-200 text-2xl mb-1">{{ props.name }}</h3>
      <div class="text-slate-400 text-lg">{{ props.rank }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['name', 'rank']);
</script>