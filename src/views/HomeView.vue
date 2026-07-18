<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { apiService, type Product } from '@/services/api';
import ProductCard from '@/components/ProductCard.vue';

const route = useRoute();
const products = ref<Product[]>([]);
const isLoading = ref<boolean>(true);


const loadProducts = async () => {
  isLoading.value = true;
  const category = route.params.category as string;
  
  if (category) {
    products.value = await apiService.getProductsByCategory(category);
  } else {
    products.value = await apiService.getProducts();
  }
  isLoading.value = false;
};


watch(() => route.params.category, loadProducts);


onMounted(loadProducts);
</script>

<template>
  <div v-if="isLoading">Just a sec..</div>
  <div v-else class="product-grid">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>