<template>
  <div class="container mt-7">
    <div v-if="schoolPending">
      <pre class="nice-pre">Ładownaie...</pre>
    </div>
    <div v-else>
      <pre class="nice-pre">{{ school }}</pre>
    </div>
    <br>
    <div v-if="teachersPending">
      Ładownie...
    </div>
    <div v-else>
      <h1 class="text-2xl ml-2">Nauczyciele w tej szkole: {{ teachers.length }}</h1>
      <div class="relative overflow-x-auto rounded-lg">
        <table
          class="w-full text-sm text-left"
        >
          <thead
            class="text-xs uppercase bg-surface-variant"
          >
            <tr>
              <th scope="col" class="px-6 py-3">name_first</th>
              <th scope="col" class="px-6 py-3">name_last</th>
              <th scope="col" class="px-6 py-3">total_info</th>
              <th scope="col" class="px-6 py-3">ok</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teacher in teachers" class="bg-surface-variant border-t">
              <UpdvTeacherListElement :teacher="teacher" />
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

const { id } = useRoute().params;
const school_uri = "https://kivvi.iqhs.pl/uczen-plus-api/v1/school/";
const teachers_uri = "https://kivvi.iqhs.pl/uczen-plus-api/v1/teacher/school/";

//złap dane szkoły
const { pending: schoolPending, data: school } = await useFetch(school_uri + id, {
  lazy: true,
  server: false
});

// złap dane nauczycieli ze szkoły
const { pending: teachersPending, data: teachers } = await useFetch(teachers_uri + id, {
  lazy: true,
  server: false
});


/*if (!school.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Nie mamy takiej szkoły",
    fatal: true,
  });
}*/
</script>

<style scoped></style>
