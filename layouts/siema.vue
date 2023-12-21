<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="container">
        <nav class="p-4 flex justify-between">
          <NuxtLink to="/updv" class="font-bold">Uczeń Plus Data Viewer</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink to="/updv/about" class="btn">Plany i rozmyślenia</NuxtLink></li>
            <li><NuxtLink to="/">Wróć na główną</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-black shadow-sm text-center p-4">
      <div class="container text-white">Grudzień 2023 - Marcel Maruszak</div>
    </footer>
  </div>
</template>