<template>
  <tr class="border-t">
    <td
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      <NuxtLink prefetch-on="interaction" :to="`/updv/teachers/${teacher.id}`">{{
        teacher.name_first
      }}</NuxtLink>
    </td>
    <td
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      <NuxtLink prefetch-on="interaction" :to="`/updv/teachers/${teacher.id}`">{{
        teacher.name_last
      }}</NuxtLink>
    </td>
    <td class="px-6 py-4">{{ teacher.total_info }}</td>
  </tr>
</template>

<script setup>
const { teacher } = defineProps(["teacher"]);
</script>

<style scoped></style>
