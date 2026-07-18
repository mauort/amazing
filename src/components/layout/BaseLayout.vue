<script setup lang="ts">
    import Header from './Header.vue'
</script>

<template>
    <div class="layout">
    <Header />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
