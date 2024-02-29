<script setup lang="ts">

const data = ref([
  {
    "id": 1,
    "ok": 1,
    "checked": 1,
    "name_full": "Zespół Szkół Technicznych im. Marii Skłodowskiej-Curie",
    "name_colloquial": "Chemik",
    "type": "technikum",
    "address": "ul. Wojska Polskiego 7, 24-100 Puławy",
    "woj": "lubelskie",
    "city": "Puławy",
    "website": "http://zst.pulawy.pl",
    "contact": "poczta@zst.pulawy.pl",
    "date_add": "2018-05-24T17:46:20.000Z",
    "date_edit": "2022-06-27T17:33:51.000Z",
    "archived": 1
  }
])

const wojew = ref(["lodzkie", "mazowieckie"])
const city = ref(["Puławy"])

function getOneValue(arr: any[], key: string) {
  const uniqueValues: any[] = [];
  for (const obj of arr) {
    if (!uniqueValues.includes(obj[key])) {
      uniqueValues.push(obj[key]);
    }
  }
  return uniqueValues.sort();
}

function zlapdane() {
  fetch('https://uczenplus.api.soniw.pl/uczen-plus-api/v1/school', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(response => {
      wojew.value = getOneValue(response, "woj")
      city.value = getOneValue(response, "city")
    })
}


</script>

<template>
  <button @click="zlapdane">Contact</button>
  <pre>{{ data }}</pre>
  <pre>{{ wojew }}</pre>
  <pre>{{ city }}</pre>
</template>