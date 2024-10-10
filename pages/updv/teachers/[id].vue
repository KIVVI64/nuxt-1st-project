<template>
  <div class="container mt-7">
    <div v-if="teacherPending">
      <pre class="nice-pre">Ładownaie... {{ id }}</pre>
    </div>
    <div v-else>
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
const teacherUri = "https://kivvi.iqhs.pl/uczen-plus-api/v1/teacher/";
const { pending: teacherPending, data: teacher } = await useFetch(
  teacherUri + id,
  {
    lazy: true,
    server: false,
  }
);

// Teacher Info
const infoUri =
  "https://kivvi.iqhs.pl/uczen-plus-api/v1/teacher_info/teacher/";
const { pending: teacherInfoPending, data: teacherInfo } = await useFetch(
  infoUri + id,
  {
    lazy: true,
    server: false,
  }
);

// Teacher Facts
const factsUri =
  "https://kivvi.iqhs.pl/uczen-plus-api/v1/teacher_facts/teacher/";
const { pending: teacherFactsPending, data: teacherFacts } = await useFetch(
  factsUri + id,
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
