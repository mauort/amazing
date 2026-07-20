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
const errorMessage = ref<string | null>(null);

const loadProduct = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  const id = Number(route.params.id as string);
  
  try {
    product.value = await apiService.getProductById(id);
  } catch (error) {
    errorMessage.value = "We couldn't load the product. Please try again later.";
  } finally {
    isLoading.value = false;
  }
};    
watch(() => route.params.id, loadProduct);

const handleAddToCart = (productToAdd: Product) => {
  addToCart(productToAdd);
  alert(`${productToAdd.title} added to cart!`);
};

onMounted(loadProduct);
</script>

<template>
  <div class="container">
    <div v-if="isLoading" class="status-message">One moment please..</div>
    
    <div v-else-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    
    <ProductDetailCard 
      v-else-if="product" 
      :product="product" 
      @add-to-cart="handleAddToCart"
    />
    

    <div v-else class="status-message">Could'nt find the product</div>
  </div>
</template>
