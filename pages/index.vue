<template>
  <IndexComponent>
    <template v-slot:default>
      <h1 class="text-slate-200 text-4xl mb-5 font-semibold">Welcome to <PrimaryText>{{ appConfig.serverName }}</PrimaryText></h1>
      <p class="text-slate-400 text-lg mb-5">Explore endless adventures and create your own path in Nexo. Join us and be part of an amazing community.</p>
      <p class="text-slate-400 text-lg mb-5">Are you looking to play on eagler? If so then here is a link to our client that is 1.12.2 <span class="font-bold text-slate-200">https://nexo-app.net/nexo-eagler/1.12.2/</span> make sure you have JSPI enabled!</p>
      <PrimaryButton @click="copyIp">Join now</PrimaryButton>
    </template>

    <template v-slot:right>
      <FeatureGrid>
        <template v-slot:default>
          <FeatureCard title="High Performance" icon="fa-solid fa-gauge-high">Top-notch server performance for smooth gameplay.</FeatureCard>
          <FeatureCard title="Supports Many Clients" icon="fa-solid fa-gamepad">We are proud to support many client such as Eagler, Cracked and java.</FeatureCard>
        </template>

        <template v-slot:bottom>
          <FeatureCard title="Active Community" icon="fa-solid fa-users">Join a vibrant community, make friends, and embark on adventures.</FeatureCard>
        </template>
      </FeatureGrid>
    </template>
  </IndexComponent>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const { copyIp } = useCopyIp();
</script>
