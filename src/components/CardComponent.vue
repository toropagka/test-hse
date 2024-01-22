<template>
  <v-card
    class="card-component"
  >
    <v-card-item>
      <div class="card-component__item">$ {{ product.price }}</div>
    </v-card-item>
    <transition mode="out-in">
      <v-card-actions v-if="isAddedtoCart" class="d-flex justify-end">
        <v-btn color="grey" variant="flat" size="x-small" @click="store.increment(product)">+</v-btn>
        <div class="mx-3">{{ getCartItemQuantity }}</div>
        <v-btn color="grey" variant="flat" size="x-small" class="mx-0" @click="store.decrement(product)">-</v-btn>
      </v-card-actions>
      <v-card-actions v-else class="d-flex justify-end">
        <v-btn color="grey" variant="flat" size="x-small" @click="store.addToCart(product)">Add to cart</v-btn>
      </v-card-actions>
    </transition>
  </v-card>
</template>

<script setup>
import { useAppStore } from '@/store/app';
import { computed } from 'vue'

const store = useAppStore();
const props = defineProps({
  product: Object
});

const getCartItemQuantity = computed(() => store.getCartItems.find(item => item.id === props.product.id).count);

const isAddedtoCart = computed(() => store.getCartItems.filter(item => item.id === props.product.id).length > 0);
</script>

<style>
.card-component {
  width: auto;
  height: 270px;
}
.card-component .v-card-item {
  padding: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.card-component .v-card-item .v-card-item__content {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 200px;
  height: 200px;
  background-color: rgb(241, 234, 234);
  overflow: hidden;
}

.card-component__item {
  margin-right: 16px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-25px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
