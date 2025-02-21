<template>
  <div>
    <h2 class="text-2xl font-semibold mb-2">Powiedzenia</h2>
    <ul v-if="teacherFacts && teacherFacts.length">
      <li class="border-l-2 my-2 pl-2" v-for="fact in teacherFacts.filter(fact => fact.table === 'powiedzenia')" :key="fact.id">
        {{ fact.content }}
      </li>
    </ul>
    <p v-else>Brak danych. <u>Dodaj pierwsze powiedzenie</u></p>
  </div>
</template>

<script setup>
const { teacherFacts } = defineProps(["teacherFacts"]);
</script>
