<template>
  <div>
    <h1>This is index products page.</h1>
    <NuxtLink to="/products/ss">ss prod</NuxtLink>
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

  useHead({
    title: "Produkty - Nuxt 1st project",
      meta: [
        { name: 'description', content: 'To jest strona z listą produktów produktów.'}
      ]
  })
</script>

<style scoped>

</style>