<script setup lang="ts">
    import {onMounted, ref} from 'vue';
    import { apiService } from '@/services/api';
    const categories = ref<string[]>([])
    const isLoading = ref<boolean>(true);

    onMounted(async () => {
    try {
        categories.value = await apiService.getCategories();
    } catch (error) {
        console.error('Error when loading categories', error);
    } finally {
        isLoading.value = false;
    }
    });

    import { useCart } from '@/composables/useCart';

    const { cartItems } = useCart();

</script>

<template>
  <header class="main-header">
    <div class="container header-content">
      <div class="logo">Amazing</div>
      
      <nav class="nav-links">

        <RouterLink to="/">Main page</RouterLink>
        <ul>
            <li v-for="category in categories" :key="category">
                <RouterLink :to="`/category/${category}`">
                    {{ category }}
                </RouterLink>
            </li>
        </ul>
        
      </nav>

      <div class="header-actions">
       
        <RouterLink to="/cart" class="cart-btn">
          Shop cart ({{ cartItems.length }})
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  border-bottom: 1px solid #c4c9d4;
  padding: var(--space-md) 0;
  background-color: var(--color-bg);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-primary);
}

.nav-links  {
  margin-left: var(--space-md);
  color: var(--color-text-main);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.nav-links ul {
  display: flex;
  list-style: none; 
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-left: var(--space-md);
}

.nav-links :hover {
  color: var(--color-primary);
}

.router-link-active {
  color: var(--color-primary);
  font-weight: bold;
}

.cart-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  cursor: pointer;
}

.cart-btn:hover {
  color: var(--color-primary-dark);
}
</style>