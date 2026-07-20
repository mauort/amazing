<script setup lang="ts">
import { ref } from 'vue';
import { apiService } from '@/services/api';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const { login } = useAuth();
const router = useRouter();
const username = ref('');
const password = ref('');
const isLoading = ref(false);
const error = ref('');

const handleLogin = async () => {
  try {
  
    await login(username.value, password.value);
   
    router.push('/');
  } catch (error) {
    alert('Username or password are incorrect');
  }
};
</script>

<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-card">
      <h1>Please, log in to acces to all the functions</h1>
      
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      
      <button :disabled="isLoading" type="submit">
        {{ isLoading ? 'Authenticating...' : 'Log in' }}
      </button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.error-message {
  color: red;
  font-size: 0.9rem;
}
</style>