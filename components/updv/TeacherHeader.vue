<template>
  <header class="card bg-blue-600 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">{{ teacher.name_first }} {{ teacher.name_last }}</h1>
      <p class="text-xl">Przedmiot</p>
    </div>
  </header>
</template>

<script setup>
const { teacher } = defineProps(['teacher'])
</script>