<template>
  <div class="container mt-7">
    <h1>Szukaj w bazie</h1>
    <!--<form @submit="handleSubmit">
      <input type="search" v-model="useSearchQuery" />
      <button type="submit">Szukaj</button>
    </form>-->
    <input type="search" v-model="useSearchQuery">
    <NuxtLink :to="{ path: '/updv/search', query: { q: useSearchQuery } }">Szukaj</NuxtLink>
    <p>{{ useSearchQuery }}</p>

    <div class="card mt-7">
      <div v-if="searchResultPending">
        <pre class="nice-pre">Ładownaie...</pre>
      </div>
      <div v-else>
        <pre class="nice-pre">{{ searchResult }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "siema",
});

const useSearchQuery = useState("searchQuery");
const { q } = useRoute().query;

// Search
const searchUri =
  "https://uczenplus.api.soniw.pl/uczen-plus-api/v1/teacher/search/";
const { pending: searchResultPending, data: searchResult } = await useFetch(
  searchUri + q,
  {
    lazy: true,
    server: false,
  }
);

// Do something with the data
console.log("mamy dane!");

//console.log(handleSubmit.searchUri);
</script>

<style scoped></style>
