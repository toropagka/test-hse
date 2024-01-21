<template>
  <v-app>
    <v-main class="d-flex align-center flex-column">
      <TheHeader />
      <TheBody />
    </v-main>
  </v-app>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheBody from '@/components/TheBody.vue';
</script>
