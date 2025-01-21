<template>
  <div>
    <h1>Gemini AI Prompt</h1>
    <input v-model="prompt" placeholder="Wprowadź swoje pytanie tutaj" />
    <button class="btn" @click="getAIResponse">Wyślij</button>
    <div v-if="response" class="responseParagraph markdown-body" v-html="renderedMarkdown"></div>
    <div v-if="loading">Ładowanie...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { marked } from "marked"; // Style for md format

const prompt = ref("");
const response = ref("");
const displayedResponse = ref("");
const renderedMarkdown = ref(""); // New ref for rendered Markdown
const loading = ref(false);

const getAIResponse = async () => {
  loading.value = true;
  response.value = "";
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
</script>

<style>

</style>
