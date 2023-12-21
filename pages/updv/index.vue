<template>
  <div class="container">
    <div v-if="schoolPending">
      Ładowanie...
    </div>
    <div v-else>
      <h2 class="text-2xl ml-2">Szkół w bazie: {{ schools.length }}</h2>
      <div class="relative overflow-x-auto rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">name_full</th>
              <th scope="col" class="px-6 py-3">name_colloquial</th>
              <th scope="col" class="px-6 py-3">city</th>
              <th scope="col" class="px-6 py-3">total_teachers</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in schools" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <UpdvSchoolListElement :school="s" />
            </tr>
          </tbody>
        </table>
      </div>   
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "siema",
});

const { pending: schoolPending, data: schools } = await useFetch(
  "https://uczenplus.api.soniw.pl/uczen-plus-api/v1/school", {
    lazy: true,
    server: false
  }
);
</script>

<style scoped></style>
