<template>
  <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-md truncate"
  >
    <NuxtLink :to="`/updv/schools/${school.id}`">{{ school.name_full }}</NuxtLink>
  </th>
  <td class="px-6 py-4">{{ school.name_colloquial }}</td>
  <td class="px-6 py-4">{{ school.city }}</td>
  <td class="px-6 py-4">{{ school.total_teachers }}</td>
</template>

<script setup>
const { school } = defineProps(['school'])
</script>

<style scoped>

</style>