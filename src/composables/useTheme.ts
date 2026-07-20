import { ref, watchEffect } from 'vue';

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

watchEffect(() => {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

export function useTheme() {
  const toggleTheme = () => { isDarkMode.value = !isDarkMode.value; };
  return { isDarkMode, toggleTheme };
}