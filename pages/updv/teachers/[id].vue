<template>
  <div class="container mt-7">
    <div v-if="teacherPending">
      <pre class="nice-pre">Ładownaie... {{ id }}</pre>
    </div>
    <div v-else>
      <div class="min-h-screen">
        <UpdvTeacherHeader :teacher="teacher[0]" />
        <main class="mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2">
              <div class="card">
                <UpdvTeacherQuotes :teacherFacts="teacherFacts" />
              </div>
              <div class="card mt-8">
                <UpdvTeacherTrivia :teacherFacts="teacherFacts" />
              </div>
            </div>
            <div>
              <div>
                <div class="card">
                  <UpdvTeacherInfo />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <pre class="nice-pre">{{ teacher }}</pre>
    </div>
  </div>

  <!-- Informacje -->
  <div class="container mt-7">
    <div v-if="teacherInfoPending">
      <pre class="nice-pre">Ładownaie...</pre>
    </div>
    <div v-else>
      <details class="mb-3">
        <summary>
          <span class="text-xl">Informacje:</span>
          <hr />
        </summary>
        <p>
          <div v-for="t in teacherInfo">
            <p>
              {{ t.property }}: <b>{{ t.value }}</b>
            </p>
          </div>
          <pre class="nice-pre">{{ teacherInfo }}</pre>
        </p>
      </details>
    </div>
  </div>

  <!-- Fakty -->
  <div class="container mt-7">
    <div v-if="teacherFactsPending">
      <pre class="nice-pre">Ładownaie...</pre>
    </div>
    <div v-else>
      <details class="mb-3">
        <summary>
          <span class="text-xl">Fakty:</span>
          <hr />
        </summary>
        <p>
          <div v-for="t in teacherFacts">
            <p>
              {{ t.table }}: <b>{{ t.content }}</b>
            </p>
          </div>
          <pre class="nice-pre">{{ teacherFacts }}</pre>
        </p>
      </details>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "siema",
});

const { id } = useRoute().params;

// Teacher
const teacherUri = "/api/teacher/";
const { pending: teacherPending, data: teacher } = await useFetch(
  teacherUri + id,
  {
    lazy: true,
    server: false,
  }
);

// Teacher Facts
const factsUri =
  "/api/teacher_facts/teacher/";
const { pending: teacherFactsPending, data: teacherFacts } = await useFetch(
  factsUri + id,
  {
    lazy: true,
    server: false,
  }
);
console.log(teacherFacts);


/*if (!school.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Nie mamy takiej szkoły",
    fatal: true,
  });
}*/
</script>

<style scoped></style>
