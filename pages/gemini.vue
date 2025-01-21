<template>
  <div>
    <h1>Gemini AI Prompt</h1>
    <input v-model="prompt" placeholder="Wprowadź swoje pytanie tutaj" />
    <button class="btn" @click="getAIResponse">Wyślij</button>
    <div v-if="response" class="responseParagraph markdown-body" v-html="renderedMarkdown"></div>
    <div v-if="loading">Ładowanie...</div>
    <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&showPrint=0&showTz=0&mode=WEEK&showDate=0&showTitle=0&src=NjRraXZ2aUBnbWFpbC5jb20&src=cWRsM2U3ZGxhNzNlNGs2bWxvZWswNWplZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bDFiY2NjZDg4cTFydGp1OTBuOGRqMHI1bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MDY3NzM4MTQ0Mjg2OTU1NjY1NjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=a3FsaTZtbmE2OG83NjZsZ2NjMXNvdXY3NTNyZWxkbnVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A1A953&color=%234A71C2&color=%23DB9835&color=%239A7BBF&color=%234B59A5&color=%23927E75&color=%23147D4E"
                style="border-width: 0"
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
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
