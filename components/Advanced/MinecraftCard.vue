<template>
  <button type="button" @click="copyIp" class="hidden lg:flex items-center group">
    <div class="uppercase text-end">
      <div v-if="statusData" class="text-slate-400 font-semibold mb-1">{{ statusText }}</div>
      <div v-else-if="status === 'idle' || status === 'pending'" class="text-slate-400 font-semibold mb-1">Loading...</div>
      <div v-else-if="error" class="text-red-500 font-semibold mb-1">Error loading data</div>

      <div class="text-xs font-bold text-slate-300 group-hover:hidden">{{ appConfig.minecraftIp }}</div>
      <div class="text-xs font-bold text-slate-300 hidden group-hover:block">Click to copy</div>
    </div>

    <div class="text-slate-400 text-4xl ms-4">
      <font-awesome-icon icon="fa-solid fa-gamepad" />
    </div>
  </button>
</template>

<script setup lang="ts">
interface ServerStatusResponse {
  online: boolean,
  players: {
    online: number
  },
};

const appConfig = useAppConfig();
const { copyIp } = useCopyIp();

const apiUrl = appConfig.bedrock 
  ? `https://api.mcsrvstat.us/bedrock/3/${appConfig.minecraftIp}` 
  : `https://api.mcsrvstat.us/3/${appConfig.minecraftIp}`;

const { data: statusData, status, error } = await useFetch<ServerStatusResponse>(apiUrl, {
  lazy: true,
  server: false,
});

const online = computed(() => {
  return statusData.value?.online;
});

const playersOnline = computed(() => {
  return statusData.value?.players.online;
});

const statusText = computed(() => {
  if (online.value === false) {
    return 'Server is offline';
  } else {
    return `${playersOnline.value} ${playersOnline.value === 1 ? 'player' : 'players'} online`;
  }
});
</script>
