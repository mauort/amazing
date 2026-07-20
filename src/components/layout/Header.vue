<script setup lang="ts">
  import {onMounted, ref} from 'vue';
  import {useAuth } from '@/composables/useAuth'
  import { apiService } from '@/services/api';
  import { useCart } from '@/composables/useCart';
  import {useRouter} from 'vue-router'
  const categories = ref<string[]>([])
  const isLoading = ref<boolean>(true);
  const { cartItems } = useCart();
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  onMounted(async () => {
    try {
        categories.value = await apiService.getCategories();
    } catch (error) {
        console.error('Error when loading categories', error);
    } finally {
        isLoading.value = false;
    }
  });
  const handleLogout = () => {
    logout();
    router.push('/'); 
  };

  const handleCartClick = (event: Event) => {
      
      if (!isLoggedIn.value) {
          event.preventDefault(); 
          router.push('/login');  
      }
  };  

    

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
       
        <RouterLink to="/cart" class="cart-btn" @click="handleCartClick">
          Shop cart ({{ cartItems.length }})
        </RouterLink>

     
        <template v-if="isLoggedIn">
            <button @click="handleLogout" class="auth-btn">Logout</button>
        </template>
        
        <template v-else>
            <RouterLink to="/login" class="auth-btn">Login</RouterLink>
        </template>
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

.header-actions {
  display: flex;
  gap: 1rem; 
  align-items: center;
}

.cart-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.cart-btn:hover {
  color: var(--color-primary-dark);
}


.auth-btn {
  background: #4a5568; 
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-family: inherit;
}

.auth-btn:hover {
  background: #2d3748;
}
</style>