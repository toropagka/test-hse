<template>
  <v-container class="the-body w-50">
    <CardComponent
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </v-container>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import CardComponent from './CardComponent.vue';
import { useAppStore } from '@/store/app';

const { products } = storeToRefs(useAppStore());
</script>

<style>
.the-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 1px solid grey;
}
</style>
