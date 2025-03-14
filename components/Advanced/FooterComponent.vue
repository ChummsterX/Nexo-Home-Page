<template>
  <footer class="border-t border-gray-800">
    <div class="p-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div class="text-slate-700 font-mono mb-6 sm:mb-0">
        <div class="mb-1">{{ appConfig.serverName }}</div>
        <div class="text-sm">&copy; {{ year }}</div>
      </div>

      <div class="text-lg space-x-6 text-slate-500 flex items-center justify-center">
        <!-- You do not have the right to remove the Craftnet icon from the footer unless you have purchased the addon. Violation may lead to loss of license. -->
        <a href="https://craftnet.cz" target="_blank">
          <img src="/img/craftnet.png" alt="Craftnet logo" class="h-8 brightness-50 opacity-50 hover:brightness-75 hover:opacity-100 duration-300 me-2 lg:me-4" />
        </a>
        
        <a v-for="socialNetwork in props.socialNetworks" :href="socialNetwork.link" target="_blank" class="hover:text-slate-300 duration-300">
          <font-awesome-icon :icon="socialNetwork.icon" :title="socialNetwork.title" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

const props = defineProps(['socialNetworks']);

const year = ref<number | null>(null);

onMounted(() => {
  const date = new Date;

  year.value = date.getFullYear();
});
</script>
