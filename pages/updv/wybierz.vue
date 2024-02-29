<template>
  <div>
    
    <div v-if="schoolPending" class="text-center mt-7">
      Ładowanie...
    </div>
    <div v-else>
      Wybierz województwo:
      <select class="text-black">
        <option v-for="woj in getUniqueWoj" :value="woj">{{ woj }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

function getOneValue(arr, key) {
  const uniqueValues = [];
  for (const obj of arr) {
    if (!uniqueValues.includes(obj[key])) {
      uniqueValues.push(obj[key]);
    }
  }
  return uniqueValues.sort();
}

const { pending: schoolPending, data: schools } = await useFetch(
  "https://uczenplus.api.soniw.pl/uczen-plus-api/v1/school", {
    lazy: true,
    server: false,
    onResponse({ response }) {
      // Process the response data
      const getUniqueWoj = getOneValue(response._data, "woj");
     console.log(getOneValue(response._data, "woj"));
    }
  }
);
</script>

<style lang="scss" scoped>

</style>