<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-t text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">¯\(°_o)/¯</p>
    <p class="mt-7">{{ error.message }}</p>
    <a href="javascript:history.back()" class="btn my-7" @click="handleError">Wróć</a>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () =>
  clearError({ redirect: "/" }, console.log("Nara!"))
</script>

<style scoped></style>
