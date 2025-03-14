<template>
  <div class="max-w-sm flex mx-auto mb-10">
    <div class="flex-shrink-0 p-3 bg-gray-800 rounded-s-md border border-e-0 border-gray-700 shadow-lg">
      <img class="w-10 h-10 rounded" :src="'https://mc-heads.net/avatar/' + nickname" :alt="nickname +  ' avatar'">
    </div>
    <input type="text" id="nickname" v-model="nickname" class="w-full p-3 bg-gray-800 placeholder-slate-400 text-slate-200 rounded-e-md border border-gray-700 shadow-lg focus:outline-none focus:ring-1" @focus="focused = true" @blur="focused = false" :style="inputStyle" placeholder="Enter your nickname here">
  </div>

  <div class="max-w-sm mx-auto grid grid-cols-2 gap-3">
    <a v-for="site in props.sites" :href="getUrl(site.url)" target="_blank" class="overflow-hidden relative block text-center px-5 py-3 focus:outline-none text-slate-200 focus:ring-4 font-medium rounded-full text-sm focus:ring-gray-700 group" :style="'background-color: ' + appConfig.primaryColor + ';'">
      <span class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50"></span>
      <span class="relative">
        {{ site.title }}
      </span>
    </a>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

const props = defineProps(['sites']);

const nickname = ref('');

const focused = ref(false);

const getUrl = (url: string) => {
  return url.replace('{nickname}', nickname.value);
};

const inputStyle = computed(() => {
  if (focused.value) {
    return 'border-color: ' + appConfig.primaryColor + '; --tw-ring-color: ' + appConfig.primaryColor + ';';
  } else {
    return '';
  }
});
</script>