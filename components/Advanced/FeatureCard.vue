<template>
  <div class="p-4 bg-gray-800 rounded-lg flex items-center shadow-lg">
    <div class="text-center w-full">
      <div class="text-gray-300 text-3xl mb-2">
        <font-awesome-icon :icon="props.icon" />
      </div>
      <h4 class="text-lg text-slate-200 font-semibold mb-1">{{ props.title }}</h4>
      <p class="text-slate-400"><slot /></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title', 'icon']);
</script>