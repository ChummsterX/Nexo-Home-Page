<template>
  <div class="px-6 sm:max-w-screen-sm md:max-w-screen-md mx-auto w-full">
    <div class="p-4 bg-gray-800 rounded-lg flex items-center border border-gray-700">
      <img class="w-10 h-10 me-3" :src="props.imgSrc" :alt="props.imgAlt">
      <div class="text-slate-200">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['imgSrc', 'imgAlt']);
</script>