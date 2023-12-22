<template>
  <div>
    <header class="bg-surface shadow-md">
      <div class="container">
        <nav class="p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">Fancy LOGO</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink to="/updv">UPDV</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Produkty</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="container">
      <slot />
    </main>
    <footer class="bg-teal-700 shadow-sm text-center p-4">
      <div class="container">Grudzień 2023 - Marcel Maruszak</div>
    </footer>
  </div>
</template>
