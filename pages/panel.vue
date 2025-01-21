<template>
  <div class="container-panel">
    <div class="left-section">
      <div id="scrollable">
        <div class="fixerxd">
          <div class="digital-clock">
            <p id="clock">{{ clock }}</p>
            <p id="date">{{ date }}</p>
          </div>

          <div class="weather-forecast">
            <h2 class="text-3xl">Weather Forecast</h2>
            <div class="weather-today">
              <div class="info">
                <div class="center h-64">
                  <img :src="wIcon" alt="Weather Icon" />
                </div>
                <p class="text-5xl text-[#feb876]">{{ temp }}</p>
                <div class="code">
                  <strong  class="text-xl"><p>{{ location }}</p></strong>
                  <p>{{ conditionText }}</p>
                </div>
              </div>

              <div class="weather-details">
                <div>
                  <Icon name="material-symbols:arrow-upward" class="mr-2" />
                  <span>{{ todayMax }}</span>
                </div>
                <div>
                  <Icon name="material-symbols:arrow-downward" class="mr-2" />
                  <span>{{ todayMin }}</span>
                </div>
                <div>
                  <Icon
                    name="material-symbols:humidity-percentage-outline"
                    class="mr-2"
                  />
                  <span>{{ humidityLevel }}</span>
                </div>
                <div>
                  <Icon name="material-symbols:air" class="mr-2" />
                  <span>{{ windMps }}</span>
                </div>
              </div>
            </div>
            <div class="forecast-days chart-fix">
              <canvas id="temperatureChart" style="height: 200px"></canvas>
            </div>
            <div class="forecast-summary box">
              <div class="flex justify-between items-center">
                <h3 class="text-2xl">AI Weather Summary</h3>
                <button id="generateSummary" @click="getAIResponse">✨</button>
              </div>
              <div class="responseParagraph markdown-body" v-html="renderedMarkdown"></div>
            </div>
            <div class="forecast-days">
              <div class="day" v-for="(forecast, index) in forecastDays" :key="index">
                <span>{{ forecast.dayName }}</span>
                <div class="center h-64">
                  <img :src="forecast.iconUrl" alt="Weather Icon" />
                </div>
                <div class="min-max">
                  <p class="max-temp">{{ forecast.maxTemp }}°</p>
                  <p>-</p>
                  <p class="min-temp">{{ forecast.minTemp }}°</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sekcja listy zadań -->
          <div class="todo-list">
            <h2>To-Do List</h2>
            <ul>
              <li v-for="task in tasks" :key="task">
                {{ task }}
                <button @click="removeTask(task)">Done</button>
              </li>
            </ul>

            <input type="text" v-model="newTask" placeholder="Add a new task" />
            <button @click="addTask(newTask)">Add Task</button>
          </div>
        </div>
      </div>
    </div>

    <div class="right-section">
      <div class="events">
        <div class="dark-new">
          <div class="zoom">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&showPrint=0&showTz=0&mode=WEEK&showDate=0&showTitle=0&src=NjRraXZ2aUBnbWFpbC5jb20&src=cWRsM2U3ZGxhNzNlNGs2bWxvZWswNWplZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bDFiY2NjZDg4cTFydGp1OTBuOGRqMHI1bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MDY3NzM4MTQ0Mjg2OTU1NjY1NjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=a3FsaTZtbmE2OG83NjZsZ2NjMXNvdXY3NTNyZWxkbnVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A1A953&color=%234A71C2&color=%23DB9835&color=%239A7BBF&color=%234B59A5&color=%23927E75&color=%23147D4E"
              style="border-width: 0"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

import { ref, onMounted, watch } from "vue";
import Chart from "chart.js/auto";
import { marked } from "marked"; // Style for md format

//Gemini AI
const prompt = ref("Ile jest mieszkańców w Polsce?");
const response = ref("");
const displayedResponse = ref("");
const renderedMarkdown = ref("Generate weather summary..."); // New ref for rendered Markdown
const loading = ref(false);

const preparePrompt = (weatherData) => {
  prompt.value = `Na podstawie podanych danych pogodowych przedstaw krótkie podsumowanie jak będzie wyglądała pogoda w najbliższym czasie. Zaokrąglaj temperatury. Pomiń omówienie prędkości wiatrów, indeksów uv, jakości powietrza oraz innych danych, chyba, że mają znaczenie. Prędkość wiatru podawaj przeliczone na m/s. Jeśli przewidywane są opady deszczu lub śniegu podaj w jakich godzinach. Do podsumowania dodaj jakąś ciekawostkę pogodową. ${weatherData}`;
  console.log(prompt.value);
};

const getAIResponse = async () => {
  loading.value = true;
  response.value = "Ładowanie...";
  preparePrompt(weatherData.value);
  try {
    //Wyślij zaputanie do ścieżki /api/gemini i wyświetl rezultat
    const { data } = await useFetch("/api/gemini", {
      method: "POST",
      body: { prompt: prompt.value },
    });
    if (data.value === undefined) {
      response.value = "Błąd serwera";
    }
    response.value = data.value;
    loading.value = false;
    //console.log(response.value);
    
  } catch (error) {
    loading.value = false;
    console.error("Error fetching AI response:", error);
    response.value = "Error fetching AI response.";
  }
};

watch(response, () => {
  displayedResponse.value = ""; // Clear the displayed response
  renderedMarkdown.value = ""; // Clear the renderedMarkdown response
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < response.value.length) {
      displayedResponse.value += response.value.charAt(i);
      renderedMarkdown.value = marked(displayedResponse.value); 
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 10); // Adjust typing speed here (milliseconds)
});

// Zegar i data
const clock = ref("");
const date = ref("");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.value = `${hours}:${minutes}:${seconds}`;

  const daysOfWeek = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  const monthsOfYear = [
    "Stycznia",
    "Lutego",
    "Marca",
    "Kwietnia",
    "Maja",
    "Czerwca",
    "Lipca",
    "Sierpnia",
    "Września",
    "Października",
    "Listopada",
    "Grudnia",
  ];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = now.getDate();
  const month = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();

  date.value = `${dayOfWeek}, ${day} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();

// Pogoda
const conditionText = ref("Sunny");
const temp = ref("0");
const humidityLevel = ref("0%");
const todayMax = ref("0°C");
const todayMin = ref("0°C");
const windMps = ref("0 kph");
const wIcon = ref("");
const location = ref("Loading...");
const forecastDays = ref([]);

let myChart;

const weatherData = ref("");

// Function to show notifications
function showNotification(message, success) {
  const notification = document.createElement("div");
  notification.className = success ? "notification success" : "notification error";
  notification.textContent = message;

  document.body.appendChild(notification);

  // Automatically hide the notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

async function refreshWeather() {
  try {
    const apiKey = "5c9cc8a12d5b4bde897200036240110";
    const geoLocation = "https://geolocation-db.com/json/";
    const locationData = await fetch(geoLocation);
    const parsedLocation = await locationData.json();
    const currentUserLocation = parsedLocation.IPv4;

    const weatherApi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentUserLocation}&days=4&aqi=no&alerts=yes`;
    const data = await fetch(weatherApi);
    const parsedData = await data.json();

    // Prepare weather data for AI prompt
    weatherData.value = JSON.stringify(parsedData);

    conditionText.value = parsedData.current.condition.text;
    temp.value = `${parsedData.current.temp_c}°`;
    humidityLevel.value = `${parsedData.current.humidity}%`;
    todayMax.value = `${Math.round(
      parsedData.forecast.forecastday[0].day.maxtemp_c
    )}°C`;
    todayMin.value = `${Math.round(
      parsedData.forecast.forecastday[0].day.mintemp_c
    )}°C`;
    windMps.value = `${Math.round(parsedData.current.wind_kph * 0.2778)} m/s`;
    wIcon.value = parsedData.current.condition.icon.replace(
      "//cdn",
      "https://cdn"
    );
    location.value = parsedData.location.name;

    // Update forecast days
    forecastDays.value = parsedData.forecast.forecastday.slice(1, 3).map(day => {
      const date = new Date(day.date);
      return {
        dayName: date.toLocaleDateString("pl-PL", { weekday: "long" }),
        iconUrl: day.day.condition.icon.replace("//cdn", "https://cdn"),
        maxTemp: Math.round(day.day.maxtemp_c),
        minTemp: Math.round(day.day.mintemp_c)
      };
    });


    // Prepare data for the temperature chart
    const forecastHours = parsedData.forecast.forecastday[0].hour;
    const forecastHoursTomorrow = parsedData.forecast.forecastday[1].hour;
    const currentHour = new Date().getHours();

    const labels = [];
    const temperatures = [];
    const precipitation = [];
    const snow = [];

    let sourceArray = forecastHours;

    for (let i = 0; i < 24; i++) {
      const hourIndex = (currentHour + i) % 24;
      const hourData = sourceArray[hourIndex];
      const date = new Date(hourData.time);

      labels.push(
        date.toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      temperatures.push(hourData.temp_c);
      precipitation.push(hourData.precip_mm);
      snow.push(hourData.snow_cm);

      if (date.getHours() === 23 && date.getMinutes() === 0) {
        sourceArray = forecastHoursTomorrow;
      }
    }

    // Destroy the existing chart if it exists
    if (myChart) {
      myChart.destroy();
    }

    // Create the temperature chart
    const ctx = document.getElementById("temperatureChart").getContext("2d");
    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatures,
            borderColor: "#feb876",
            tension: 0.4,
            borderWidth: 5,
            pointRadius: 0,
          },
          {
            label: "Precipitation (mm)",
            data: precipitation,
            type: "bar",
            stack: "combined",
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            yAxisID: "precipitation-axis",
          },
          {
            label: "Snow (cm)",
            data: snow,
            type: "bar",
            stack: "combined",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            yAxisID: "precipitation-axis",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            stacked: true,
          },
          y: {
            display: true,
            stacked: true,
            position: "left",
            title: {
              display: false,
              text: "Temperature (°C)",
            },
          },
          "precipitation-axis": {
            suggestedMin: 0,
            suggestedMax: 10,
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
            title: {
              display: false,
              text: "Precipitation (mm)",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Wyświetl powiadomienie o sukcesie
    showNotification("Pogoda została zaktualizowana!", true);

  } catch (error) {
    console.error("Error fetching weather data:", error);
    showNotification(
      "Błąd podczas aktualizacji pogody. Sprawdź konsolę.",
      false
    );
  }
}

onMounted(() => {
  refreshWeather();
  setInterval(() => {
    const now = new Date();
    if (now.getMinutes() === 0) {
      refreshWeather();
    }
  }, 60 * 1000);
});

// Lista zadań
const tasks = ref([]);
const newTask = ref("");

function loadTasks() {
  tasks.value = JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

function addTask(task) {
  tasks.value.push(task);
  saveTasks();
  newTask.value = ""; // Reset inputa
}

function removeTask(task) {
  tasks.value = tasks.value.filter((t) => t !== task);
  saveTasks();
}

onMounted(() => {
  loadTasks();
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #19120c; /* Zmieniony kolor tła */
  color: #f1f1f1;
}

h2 {
  color: #feb876; /* Zmieniony kolor nagłówków */
}

.markdown-body {
  min-height: 30px;
}

.box {
  background-color: #2c231f;
  padding: 10px;
  margin-top: 10px;
  border-radius: 16px;
}

.container-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.left-section {
  width: 30%;
  height: 100vh;
  overflow: hidden;
}

#scrollable {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 15px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 15px */
}

.fixerxd {
  padding: 20px 0px 20px 20px;
}

.right-section {
  width: calc(100% - 30%);
  padding: 20px 20px 20px 5px;
}

.digital-clock {
  text-align: center;
  margin-bottom: 20px;
}

#clock {
  font-size: 48px;
  font-weight: bold;
}

#date {
  font-size: 20px;
  margin-top: 5px;
}

.weather-forecast {
  background-color: #261e18;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 28px;
}

.weather-today {
  display: flex;
  flex-direction: column;
  background-color: #2c231f;
  padding: 10px;
  border-radius: 16px;
}

.weather-today .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.code {
  text-align: right;
}

#location {
  font-size: x-large;
}

#temp {
  font-size: xxx-large;
  color: #feb876;
}

.weather-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.weather-details div {
  font-size: 16px;
  padding: 8px 8px 0px 0px;
  display: flex;
  align-items: center;
}

.forecast-days {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;
}

.chart-fix {
  padding-left: 5px;
  padding-right: 5px;
  background-color: #2c231f;
  border-radius: 16px;
  margin-top: 10px;
}

.day {
  background-color: #2c231f;
  width: 100%;
  padding: 10px;
  border-radius: 16px;
}

.min-max {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  padding-top: 5px;
}

.todo-list {
  background-color: #261e18; /* Zmieniony kolor sekcji */
  padding: 20px;
  border-radius: 28px;
}

.todo-list input {
  width: calc(100% - 90px);
  padding: 10px;
  margin-right: 10px;
  background-color: #19120c; /* Dopasowany kolor do tła */
  border: 1px solid #feb876; /* Dopasowany kolor obramowania */
  color: #f1f1f1;
}

.todo-list button {
  padding: 10px;
  background-color: #feb876;
  border: none;
  cursor: pointer;
  color: #261e18;
}

#task-list {
  list-style-type: none;
  margin-bottom: 10px;
}

#task-list li {
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f1f1f1;
}

#task-list li button {
  padding: 5px;
  color: #feb876;
  background: none;
  cursor: pointer;
}

.events {
  background-color: #261e18; /* Zmieniony kolor sekcji */
  padding: 20px;
  border-radius: 28px;
}

iframe {
  width: 100%;
  height: calc(127vh - 120px);
  border: none;
  border-radius: 16px;
}
.dark {
  filter: invert(0.95) saturate(0.5) hue-rotate(300deg) sepia(0.5);
}
.dark-new {
  filter: invert(0.92) saturate(0.7) hue-rotate(330deg) sepia(0.4);
}

.zoom {
  zoom: 0.8;
}

button,
input {
  border-radius: 8px;
}

.h-64 {
  height: 64px;
}

.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* Dodaj style CSS dla dymków powiadomień (np. w pliku style.css) */
.notification {
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 10px 20px;
  border-radius: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999; /* Ensure it's on top */
  font-weight: bold;
}

.notification.success {
  background-color: #4caf50; /* Green */
  color: white;
}

.notification.error {
  background-color: #f44336; /* Red */
  color: white;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

#generateSummary {
  border-radius: 50%; /* Circle */
  border: 1px solid #ded2bd; /* White border */
  background: none;
  padding: 5px;
}

#generateSummary:hover {
  background-color: #ded2bd33;
  cursor: pointer;
}
</style>
