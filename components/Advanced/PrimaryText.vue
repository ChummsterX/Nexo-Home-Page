<template>
  <span :style="'color: ' + appConfig.primaryColor"><slot /></span>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>