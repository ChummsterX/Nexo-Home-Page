<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover" :style="'background-image: url(\''+ props.backgroundSrc + '\');'"></div>
    <div class="absolute top-0 left-0 w-full h-full magicpattern opacity-70"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>

    <div class="relative">
      <header class="border-b border-gray-300/10 backdrop-blur">
        <nav class="p-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between items-center">
          <div class="text-slate-200 text-lg font-semibold hidden lg:block">
            <NuxtLink to="/">{{ appConfig.serverName }}</NuxtLink>
          </div>

          <div class="space-x-14 text-slate-400 font-semibold hidden lg:block">
            <template v-for="link in props.links">
              <NuxtLink v-if="!link.external" :to="link.path" :class="{'text-slate-200': isActive(link.path)}">
                <font-awesome-icon :icon="link.icon" /> {{ link.title }}
              </NuxtLink>
              <a v-else :href="link.path" :target="link.blank ? '_blank' : '_self'">
                <font-awesome-icon :icon="link.icon" /> {{ link.title }}
              </a>
            </template>
          </div>

          <button type="button" @click="mobileDrawer?.show()" aria-controls="mobileDrawer" class="text-slate-400 text-lg font-semibold lg:hidden"><font-awesome-icon icon="fa-solid fa-bars" /> Menu</button>

          <div class="text-slate-400 text-lg space-x-6 lg:hidden">
            <button type="button" @click="copyIp"><font-awesome-icon icon="fa-solid fa-gamepad" title="Copy IP" /></button>
            <a :href="'https://' + appConfig.discordLink" target="_blank"><font-awesome-icon icon="fa-brands fa-discord" title="Discord server" /></a>
          </div>
        </nav>
      </header>

      <div class="relative px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto h-[250px] md:h-[400px] flex items-center justify-between">
        <div class="w-full max-w-64 xl:max-w-80 flex justify-end">
          <MinecraftCard />
        </div>

        <div class="absolute left-1/2 -translate-x-1/2">
          <NuxtLink to="/">
            <img :src="props.logoSrc" class="max-h-20 md:max-h-32 max-w-64 md:max-w-80" :alt="props.logoAlt">
          </NuxtLink>
        </div>

        <div class="w-full max-w-64 xl:max-w-80 flex">
          <DiscordCard />
        </div>
      </div>
    </div>
  </div>

  <div id="mobileDrawer" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-64 bg-gray-800" tabindex="-1" aria-labelledby="mobileDrawerLabel">
    <h5 id="mobileDrawerLabel" class="text-base font-semibold uppercase text-slate-400">Menu</h5>

    <button type="button" @click="mobileDrawer?.hide()" aria-controls="mobileDrawer" class="text-slate-400 bg-transparent hover:bg-gray-600 hover:text-slate-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>

    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li v-for="link in props.links">
          <NuxtLink v-if="!link.external" :to="link.path" @click="mobileDrawer?.hide()" class="flex items-center p-2 rounded-lg text-slate-200 hover:bg-gray-700 group" :class="{ 'bg-gray-700': isActive(link.path) }">
            <span class="transition duration-75 group-hover:text-slate-200" :class="{ 'text-slate-200': isActive(link.path), 'text-slate-400': !isActive(link.path) }">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span class="ms-3">{{ link.title }}</span>
          </NuxtLink>
          <a v-else :href="link.path" :target="link.blank ? '_blank' : '_self'" class="flex items-center p-2 rounded-lg text-slate-200 hover:bg-gray-700 group">
            <span class="transition duration-75 group-hover:text-slate-200 text-slate-400">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span class="ms-3">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Drawer } from 'flowbite';

const appConfig = useAppConfig();
const { copyIp } = useCopyIp();

const props = defineProps(['logoSrc', 'logoAlt', 'backgroundSrc', 'links']);

const mobileDrawer = ref<Drawer | null>(null);

const route = useRoute();

const isActive = (path: string) => {
  return route.path === path;
};

const initMobileDrawer = () => {
    const $targetEl = document.getElementById('mobileDrawer');

    const options = {
        placement: 'left',
        bodyScrolling: true,
    }

    mobileDrawer.value = new Drawer($targetEl, options);
};

onMounted(() => {
  useFlowbite(() => {
    initMobileDrawer();
  });
});
</script>
