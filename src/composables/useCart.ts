
import { ref } from 'vue';

const cartCount = ref(0);

export function useCart() {
  const addToCart = () => {
    cartCount.value++;
  };

  return {
    cartCount,
    addToCart
  };
}