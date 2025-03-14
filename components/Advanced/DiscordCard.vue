<template>
  <a :href="'https://' + appConfig.discordLink" target="_blank" class="hidden lg:flex items-center group">
    <div class="text-gray-400 text-4xl me-4">
      <font-awesome-icon icon="fa-brands fa-discord" />
    </div>

    <div class="uppercase text-start">
      <div v-if="status === 'idle' || status === 'pending'" class="text-gray-400 font-semibold mb-1">Loading...</div>
      <div v-else-if="error" class="text-red-500 font-semibold mb-1">Error loading data</div>
      <div v-else class="text-gray-400 font-semibold mb-1">{{ statusText }}</div>

      <div class="text-xs font-bold text-gray-300 group-hover:hidden">{{ appConfig.discordLink }}</div>
      <div class="text-xs font-bold text-gray-300 hidden group-hover:block">Click to join</div>
    </div>
  </a>
</template>

<script setup lang="ts">

interface DiscordWidgetResponse {
  members: Array<{}>;
};

const appConfig = useAppConfig();

const { data: membersOnline, status, error } = await useFetch(`https://discord.com/api/guilds/${appConfig.discordId}/widget.json`, {
  lazy: true,
  server: false,
  transform: (data: DiscordWidgetResponse) => {
    return data.members.length;
  }
});

const statusText = computed(() => {
  return `${membersOnline.value} ${membersOnline.value === 1 ? 'member' : 'members'} online`;
});
</script>
