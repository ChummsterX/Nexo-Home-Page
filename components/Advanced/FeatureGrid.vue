<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <slot />
    </div>
    <div class="flex justify-center">
      <div class="md:w-1/2 w-full">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>