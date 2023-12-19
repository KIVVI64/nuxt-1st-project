<template>
  <div>
    <div v-for="n in nauczyciele">
      <h1>Dane nauczyciela</h1>
      <h2>{{ n.first_name }} {{ n.last_name }}</h2>
    </div>
  </div>
</template>

<script setup>
const uri = 'https://kivvi.iqhs.pl/uczen-plus-api/v1/employees/'
const { id } = useRoute().params
const { data: nauczyciele } = useFetch(uri)


</script>

<style scoped>

</style>