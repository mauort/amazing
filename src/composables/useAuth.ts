import { ref, computed } from 'vue';
import { apiService } from '@/services/api';
const token = ref<string | null>(localStorage.getItem('userToken'));

export function useAuth() {
  
 
  const isLoggedIn = computed(() => {
    return token.value !== null && token.value !== 'null' && token.value.trim() !== '';
  });


  const login = async (username: string, password: string) => {
    try {
      
      const newToken = await apiService.login(username, password);
      
      
      if (newToken) {
        localStorage.setItem('userToken', newToken);
        token.value = newToken; 
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; 
    }
  };

  
  const logout = () => {
    localStorage.removeItem('userToken');
    token.value = null;
  };

  return { isLoggedIn, login, logout };
}