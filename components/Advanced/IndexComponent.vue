<template>
  <Container>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="flex items-center">
        <div>    
          <slot />
        </div>
      </div>

      <div class="flex items-center">
        <div class="w-full">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </Container>
</template>