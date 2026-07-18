<script setup lang="ts">
import type { Product } from '@/services/api';
defineProps<{ product: Product }>();
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="card">
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
  </RouterLink>
</template>