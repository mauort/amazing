<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { apiService, type Product } from '@/services/api';
import ProductCard from '@/components/ProductCard.vue';

const route = useRoute();
const products = ref<Product[]>([]);
const isLoading = ref<boolean>(true);
const errorMessage = ref<string | null>(null);

const loadProducts = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  
  
  const category = route.params.category as string;
  
  try {
    if (category) {
     
      products.value = await apiService.getProductsByCategory(category);
    } else {
      
      products.value = await apiService.getProducts();
    }
  } catch (error) {
    errorMessage.value = "We couldn't load the products.";
  } finally {
    isLoading.value = false;
  }
};


watch(() => route.params.category, () => {
  loadProducts();
});


onMounted(() => {
  loadProducts();
});
</script>

<template>
  <div v-if="isLoading" class="status-message">Just a sec..</div>
  <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  <div v-else class="product-grid">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: var(--space-md);
  padding: var(--space-md);
}


@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .product-grid { grid-template-columns: 1fr; }
}
</style>