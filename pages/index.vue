<template>
  <div>
    <div class="card mt-7">
      <h1>Siema wszystkim!</h1>
      <p>To jest strona główna aplikacji napisanej przy użyciu Nuxt 3</p>
    </div>
    <nav>
      <ul>
        <li><NuxtLink to="/colors">Colors -></NuxtLink></li>
        <li><NuxtLink to="/typography">Typography -></NuxtLink></li>
      </ul>
    </nav>
    <br>
    <h3>Do zrobienia:</h3>
    <ul>
      <li><s>Ogarnij routing</s></li>
      <li><s>Dodaj tailwindcss</s></li>
      <li><s>Zaciągaj dane z API</s></li>
      <li><s>Deploy that beatch!</s></li>
      <li><s>Strony błędów</s></li>
    </ul>
    <br>
    <p>Powodzenia!</p>
    <br>
    <p>Zawartość useState('searchQuery'): <b>{{ useSearchQuery }}</b></p>
    <p>WOW ale to zajebiste to wyżej xD</p>
    <br>
    <p>Dal testów:</p>
    <NuxtLink to="/siema">ten link nie istnieje</NuxtLink>
  </div>
</template>

<script setup>
const useSearchQuery = useState('searchQuery')
</script>