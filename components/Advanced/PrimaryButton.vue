<template>
<button type="button" class="overflow-hidden relative text-center px-5 py-3 focus:outline-none text-slate-200 focus:ring-4 font-medium rounded-full text-sm focus:ring-gray-700 group" :style="'background-color: ' + appConfig.primaryColor + ';'">
  <span class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50"></span>
  <span class="relative">
    <slot />
  </span>
</button>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>