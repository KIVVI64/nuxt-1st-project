<template>
  <div>
    <h1 class="text-4xl">This is an about page.</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
/*definePageMeta({
    layout: 'landing'
  })*/
const { data } = await useFetch("/api/currency/USD");
</script>
