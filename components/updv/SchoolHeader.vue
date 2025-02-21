<template>
  <header class="card bg-blue-600 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-2">{{ school.name_full }}</h1>
      <p class="text-xl">{{ school.name_colloquial }}</p>
    </div>
  </header>
</template>

<script setup>
const { school } = defineProps(['school'])
</script>