<template>
  <div class="container">
    <div>
      <label for="selectedWoj">Wybierz województwo:</label>
      <div class="select-container">
        <select id="selectedWoj" v-model="selectedWoj" class="form-control bg-surface-variant">
          <option value="none">wojewudztwo</option>
          <option v-for="woj in wojewodztwa" :value="woj.value">{{ woj.title }}</option>
        </select>
      </div>
      
    </div>
    Woj: {{ selectedWoj }}
    <pre>{{ szkolyWoj }}</pre>
    <div v-if="schoolPending">
      Ładowanie...
    </div>
    <div v-else>
      <h2 class="text-2xl ml-2">Szkół w bazie: {{ schools.length }}</h2>
      <div class="relative overflow-x-auto rounded-lg">
        <table
          class="w-full text-sm text-left"
        >
          <thead
            class="text-xs uppercase bg-surface-variant"
          >
            <tr>
              <th scope="col" class="px-6 py-3">name_full</th>
              <th scope="col" class="px-6 py-3">name_colloquial</th>
              <th scope="col" class="px-6 py-3">city</th>
              <th scope="col" class="px-6 py-3">total_teachers</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in schools" class="bg-surface-variant border-b">
              <UpdvSchoolListElement v-if="s.woj == selectedWoj" :school="s" />
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

const selectedWoj = ref()
const selectedCity = ref()
const wojewodztwa = ref([
  { title: "Dolnośląskie", value: "dolnoslaskie" },
  { title: "Kujawsko-Pomorskie", value: "kujawsko-pomorskie" },
  { title: "Łódzkie", value: "lodzkie" },
  { title: "Lubelskie", value: "lubelskie" },
  { title: "Lubuskie", value: "lubuskie" },
  { title: "Małopolskie", value: "malopolskie" },
  { title: "Mazowieckie", value: "mazowieckie" },
  { title: "Opolskie", value: "opolskie" },
  { title: "Podkarpackie", value: "podkarpackie" },
  { title: "Podlaskie", value: "podlaskie" },
  { title: "Pomorskie", value: "pomorskie" },
  { title: "Śląskie", value: "slaskie" },
  { title: "Świętokrzyskie", value: "swietokrzyskie" },
  { title: "Warmińsko-Mazurskie", value: "warminsko-mazurskie" },
  { title: "Wielkopolskie", value: "wielkopolskie" },
  { title: "Zachodniopomorskie", value: "zachodniopomorskie" }
])

const szkolyWoj = ref([])

function getOneValue(arr, key) {
  const uniqueValues = [];
  for (const obj of arr) {
    if (!uniqueValues.includes(obj[key])) {
      uniqueValues.push(obj[key]);
    }
  }
  return uniqueValues.sort();
}

function filterCity(arr, miasto) {
  console.log("Yolo");
  return arr.filter(tab => tab.city === miasto);
}
function filterState(arr, wojewudztwo) {
  return arr.filter(tab => tab.woj === wojewudztwo);
}


const { pending: schoolPending, data: schools } = await useFetch(
  "https://kivvi.iqhs.pl/uczen-plus-api/v1/school", {
    lazy: true,
    server: false,
    onResponse({ request, response, options }) {
      // Process the response data
      //console.log("Mam dane!", response);
      //const redCars = response._data.filter(car => car.woj === selectedWoj);
      //console.log(redCars);
    },
  }
);

const siema = () => {
  //schools.value.filter(school => schools.value.woj === selectedWoj)
  //city.value = getOneValue(schools.value, "city")
  //console.log("Siema");
  //console.log(schools);
  //console.log(getOneValue(schools.value, "city"));
  //console.log(filterCity(schools.value, "Puławy"));
  szkolyWoj.value = filterState(schools.value, selectedWoj)
}

watch(selectedWoj, siema)
</script>

<style scoped></style>
