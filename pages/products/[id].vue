<template>
  <div>
    <Head>
      <Title>{{ product.title }} - Nuxt 1st project</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" class="my-6"/>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id

  //złap dane z produktu
  const { data: product } = await useFetch(uri)

  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Nie znaleziono produktu',
      fatal: true
    })
  }
</script>

<style scoped>

</style>