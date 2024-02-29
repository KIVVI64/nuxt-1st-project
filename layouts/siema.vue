<template>
  <div>
    <header class="bg-surface shadow-sm">
      <div class="container">
        <nav class="p-4 flex justify-between">
          <NuxtLink to="/updv" class="font-bold">Uczeń Plus Data Viewer</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink to="/updv/about" class="btn">Plany i rozmyślenia</NuxtLink></li>
            <li><NuxtLink to="/updv/search">Szukaj</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-black shadow-sm text-center p-4">
      <div class="container text-white">12.2023-04.2024 - Uczeń+</div>
    </footer>
  </div>
</template>