<template>
  <section>
    <h2 class="text-3xl text-slate-200 mb-6">{{ props.title }}</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps(['title']);
</script>
