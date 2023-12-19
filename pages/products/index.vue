<template>
  <div>
    <h1>This is index products page.</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  // zgarnianie obiektu z produktami
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>