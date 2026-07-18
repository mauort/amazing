import  type {Product}  from '@/services/api';
import { ref } from 'vue';


const cartItems = ref<Product[]>([]);

export function useCart() {
  const addToCart = (product: Product) => {
    cartItems.value.push(product);
  };

  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(p => p.id !== productId);
  };

  return { cartItems, addToCart, removeFromCart };
}