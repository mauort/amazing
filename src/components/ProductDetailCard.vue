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
      
      <button class="btn-primary" @click="$emit('add-to-cart', product)">
        Add to cart
      </button>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  border: 1px solid var(--color-black); 
  padding: var(--space-md);
  border-radius: 8px;
  display: flex;
  flex-direction: column; 
  transition: transform 0.2s;
}

.product-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-sm);
}

.image-wrapper {
  width: 100%;
  height: 200px; 
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
}

.category {
  color: var(--color-text-muted);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text-muted);
  margin: 1rem 0;
}


@media (max-width: 768px) {
  .product-card {
    grid-template-columns: 1fr;
  }
}
</style>