<template>
  <div>
    <header>
      <h3>Siema z landing template xD</h3>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Produkty</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      Grudzień 2023 - Marcel Maruszak
    </footer>
  </div>
</template>