<template>
  <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    <NuxtLink :to="`/updv/teachers/${teacher.id}`">{{ teacher.name_first }}</NuxtLink>
  </th>
  <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    <NuxtLink :to="`/updv/teachers/${teacher.id}`">{{ teacher.name_last }}</NuxtLink>
  </th>
  <td class="px-6 py-4">{{ teacher.total_info }}</td>
  <td class="px-6 py-4">{{ teacher.ok }}</td>
</template>

<script setup>
const { teacher } = defineProps(['teacher'])
</script>

<style scoped>

</style>