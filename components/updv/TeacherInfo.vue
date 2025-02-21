<template>
  <div>
    <div v-if="!teacherInfo || latestEntries.length === 0">
      Brak danych
    </div>
    <div v-else v-for="(value, key) in latestEntries" :key="key">
      <strong>{{ key }}:</strong> {{ value }}
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';

//const { teacherInfo } = defineProps(["teacherInfo"]);
const { id } = useRoute().params;
// Teacher Info
const infoUri = "/api/teacher_info/teacher/";
const { pending: teacherInfoPending, data: teacherInfo } = await useFetch(
  infoUri + id,
  {
    lazy: true,
    server: false,
  }
);

const latestEntries = computed(() => {
  const latest = {};
  if (teacherInfo.value) {
    teacherInfo.value.forEach(entry => {
      if (!latest[entry.property] || new Date(entry.date_edit) > new Date(latest[entry.property].date_edit)) {
        latest[entry.property] = entry;
      }
    });
  }
  return Object.fromEntries(Object.entries(latest).map(([key, value]) => [key, value.value]));
});

watch(teacherInfo, (newVal) => {
  if (newVal) {
    latestEntries.value = computeLatestEntries(newVal);
  }
});

function computeLatestEntries(entries) {
  const latest = {};
  entries.forEach(entry => {
    if (!latest[entry.property] || new Date(entry.date_edit) > new Date(latest[entry.property].date_edit)) {
      latest[entry.property] = entry;
    }
  });
  return Object.fromEntries(Object.entries(latest).map(([key, value]) => [key, value.value]));
}
</script>
