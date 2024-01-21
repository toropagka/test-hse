// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('AppStore', {
  state: () => ({
    products: [
      {
        id: 1,
        price: 20,
        count: 0
      },
      {
        id: 2,
        price: 100,
        count: 0
      },
      {
        id: 3,
        price: 50,
        count: 0
      },
    ],

    cartItems : []
  }),

  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].count += 1;
      } else {
        const newItem = { ...item, count: 1 };
        this.cartItems.push(newItem);
      }
    },

    increment(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if(index !== -1) {
        this.cartItems[index].count += 1;
      }
  },
  decrement(item) {
    let index = this.cartItems.findIndex(product => product.id === item.id);
    if(index !== -1) {
      this.cartItems[index].count -= 1;
      if(this.cartItems[index].count === 0){
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      }
    }
  },
  removeFromCart(item) {
    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
  }
  },

  getters: {
    getCartItems: (state) => state.cartItems,

    total: (state) => state.cartItems.reduce((acc, item) => {
      const product = state.products.find(el => el.id === item.id);
      if (product) {
        return acc + product.price * item.count;
      }
      return acc;
    }, 0),
  },
})
