<script setup lang="ts">
import { useCart } from '@/composables/useCart';


const { cartItems, removeFromCart } = useCart();

</script>


<template>
  <div class="cart-view">
    <h1>Your Shopping Cart</h1>
    
    
    <div v-if="cartItems.length === 0">
      Your cart is empty, go look for something you like! 
    </div>

    
    <div v-else v-for="product in cartItems" :key="product.id" class="cart-item">
      <h3>{{ product.title }}</h3>
      <p>${{ product.price }}</p>
      
      <button @click="removeFromCart(product.id)">
        Remove
      </button>
    </div>
  </div>
</template>
