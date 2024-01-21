<template>
  <v-toolbar
    color="indigo-lighten-2"
    prominent
    class="w-50 the-header"
  >
    <div class="d-flex ga-2 the-header__content">
      <v-icon size="x-large">mdi-cart-outline</v-icon>
      <div class="the-header__total">$ {{ store.total }}</div>
      <div class="the-header__count">{{ store.getCartItems.length }}</div>
    </div>
  </v-toolbar>
</template>

<script setup>
import { useAppStore } from '@/store/app';

const store = useAppStore();
</script>

<style>
.the-header .v-toolbar__content {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
}
.the-header__content {
  position: relative;
}
.the-header__total {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  min-width: 50px;
}
.the-header__count {
  display: flex;
  justify-content: center;
  min-width: 10px;
  position: absolute;
  font-size: 8px;
  top: 5px;
  left: 12px;
}
</style>
