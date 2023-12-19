<template>
  <div>
    <ProductDetails :product="product" class="my-6"/>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id

  //złap dane z produktu
  const { data: product } = await useFetch(uri)
</script>

<style scoped>

</style>