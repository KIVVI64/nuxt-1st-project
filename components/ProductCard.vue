
import type { NuxtImg } from '#build/components';
<template>
  <div class="card text-center">
    <NuxtImg :src="product.image" alt="zdjeie produktu" class="thumb"/>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn">-></p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>