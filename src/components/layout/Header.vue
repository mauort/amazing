<template>
  <header class="main-header">
    <div class="container header-content">
      <div class="logo">Amazing</div>
      
      <nav class="nav-links">
        <a href="/">Main page</a>
        <a href="/categories">Categories</a>
      </nav>

      <div class="header-actions">
        <!-- El contador se actualizará según el estado de tu carrito -->
        <button class="cart-btn">Shop cart (0)</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  border-bottom: 1px solid #e5e7eb; /* Un gris muy sutil */
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

.nav-links a {
  margin-left: var(--space-md);
  color: var(--color-text-main);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.cart-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  cursor: pointer;
}
</style>