<script setup lang="ts">
import type { Product } from '@/services/api';

defineProps<{ product: Product }>();
</script>

<template>
  <article class="product-card">
    <div class="image-wrapper">
      <img :src="product.image" :alt="product.title" />
    </div>
    
    <div class="info-wrapper">
      <span class="category">{{ product.category }}</span>
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <p class="description">{{ product.description }}</p>
      
      <button class="add-btn" @click="$emit('add-to-cart', product)">
        Add to cart
      </button>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: start;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.category {
  color: #666;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 1rem 0;
}

.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.add-btn:hover {
  background-color: #3aa876;
}


@media (max-width: 768px) {
  .product-card {
    grid-template-columns: 1fr;
  }
}
</style>