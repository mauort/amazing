<script setup lang="ts">
import { useCart } from '@/composables/useCart';
const { addToCart } = useCart(); 
import ProductDetailCard from '@/components/ProductDetailCard.vue';
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { apiService, type Product } from '@/services/api';

const route = useRoute();

const product = ref<Product>();
const isLoading = ref<boolean>(true);

const loadProduct = async () => {
  isLoading.value = true;
  const id = Number(route.params.id as string);
  
  try {
    product.value = await apiService.getProductById(id);
  } catch (error) {
    console.error("Error cargando producto:", error);
  } finally {
    isLoading.value = false;
  }
};    
watch(() => route.params.id, loadProduct);

const handleAddToCart = () => {
  addToCart(); 
  alert('One more in the cart!');
};

onMounted(loadProduct);
</script>

<template>
  <div class="container">
    <div v-if="isLoading">One moment please..</div>
    <ProductDetailCard v-else-if="product" :product="product" @add-to-cart="handleAddToCart"/>
    <div v-else>Could'nt find the product</div>
  </div>
</template>
