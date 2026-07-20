import { describe, it, expect } from 'vitest';
import { useCart } from './useCart';

describe('useCart', () => {
  it('should add a product to the cartItems', () => {
    
    const { cartItems, addToCart } = useCart();
    
    const mockLegoProduct = { 
      id: 1, 
      title: 'Test Product', 
      price: 10, 
      image: '', 
      category: '', 
      description: '' 
    };
    
    addToCart(mockLegoProduct);
    
    
    const item = cartItems.value[0];
    if (!item) throw new Error("Item not found in cart");
    
    expect(item.title).toBe('Test Product');
  });
});