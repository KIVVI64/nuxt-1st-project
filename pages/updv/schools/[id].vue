<template>
  <div class="container mt-7">
    <div v-if="schoolPending">
      <pre class="nice-pre">Ładownaie...</pre>
    </div>
    <div v-else>
      <div class="min-h-screen">
        <UpdvSchoolHeader :school="school[0]" />
        <main class="mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <div class="card" v-if="teachers">
                <h2 class="text-2xl font-semibold mb-2">
                  Osoby w tej szkole: {{ teachers.length }}
                </h2>
                <div class="relative overflow-x-auto rounded-lg">
                  <table class="w-full text-sm text-left">
                    <thead class="text-xs uppercase">
                      <tr>
                        <th scope="col" class="px-6 py-3">Imię</th>
                        <th scope="col" class="px-6 py-3">Nazwisko</th>
                        <th scope="col" class="px-6 py-3">Informacje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <UpdvTeacherListElement
                        v-for="teacher in teachers"
                        :teacher="teacher"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
              <UpdvTeachersList schoolId="{schoolData.id}" />
            </div>
            <div>
              <div>
                <UpdvRatingSection class="card" schoolId="{schoolData.id}" />
                <UpdvSchoolInfo class="card mt-8" :school="school[0]" />
                <UpdvCommentSection schoolId="{schoolData.id}" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <pre class="nice-pre">{{ school }}</pre>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "siema",
});

const { id } = useRoute().params;
const school_uri = "/api/school/";
const teachers_uri = "/api/teacher/school/";

//złap dane szkoły
const { pending: schoolPending, data: school } = await useFetch(
  school_uri + id,
  {
    lazy: true,
    server: false,
  }
);

// złap dane nauczycieli ze szkoły
const { pending: teachersPending, data: teachers } = await useFetch(
  teachers_uri + id,
  {
    lazy: true,
    server: false,
  }
);

/*if (!school.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Nie mamy takiej szkoły",
    fatal: true,
  });
}*/
</script>

<style scoped></style>
